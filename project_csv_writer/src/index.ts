// CSV Writer Project

interface Payment {
    id: number
    amount: number
    to: string
    notes: string
}

// Essentially an array of keys
// Utilized to enforce that keys in answer below are within this array
type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[]

class CSVWriter {
    // When instantiated, the only argument allowed
    // is an array of aforementioned keys
    constructor(private columns: PaymentColumns) {
        this.csv = `${this.columns.join(', ')}\n`
    }

    private csv: string

    private formatRow(p: Payment): string {
        return this.columns.map(col => p[col]).join(', ')
    }

    printFormattedRows(values: Payment[]): void {
        // formats each value with a comma separator
        const rows = values.map(v => this.formatRow(v))
        // then each row is printed below the next separated by a new line
        this.csv = `${this.csv}${rows.join('\n')}`
        // and logged to the console
        console.log(this.csv)
    }
}

const writer = new CSVWriter(['id', 'amount', 'to', 'notes'])

writer.printFormattedRows([
    { id: 1, amount: 50, to: 'yoshi', notes: 'for design work' },
    { id: 2, amount: 50, to: 'yoshi', notes: 'for design work' },
])
