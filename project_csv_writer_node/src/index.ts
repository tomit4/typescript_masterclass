// CSV Writer Project (with nodeJS)

import { existsSync, mkdirSync, appendFileSync } from 'fs'

interface Payment {
    id: number
    amount: number
    to: string
    notes: string
}

type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[]

class CSVWriter {
    constructor(private columns: PaymentColumns) {
        this.csv = `${this.columns.join(', ')}\n`
    }

    private csv: string

    private formatRow(p: Payment): string {
        return this.columns.map(col => p[col]).join(', ')
    }

    save(dirName: string, fileName: string): void {
        if (!existsSync(dirName)) mkdirSync(dirName)
        const fullPathName = `./${dirName}/${fileName}`
        appendFileSync(fullPathName, this.csv)
        this.csv = '\n'
        console.log('file saved to :=>', fullPathName)
    }
    addRows(values: Payment[]): void {
        const rows = values.map(v => this.formatRow(v))
        this.csv = `${this.csv}${rows.join('\n')}`
        console.log(this.csv)
    }
}

const writer = new CSVWriter(['id', 'amount', 'to', 'notes'])

writer.addRows([
    { id: 1, amount: 50, to: 'yoshi', notes: 'for design work' },
    { id: 2, amount: 75, to: 'mario', notes: 'for web dev work' },
])

writer.save('data', 'payments.csv')
