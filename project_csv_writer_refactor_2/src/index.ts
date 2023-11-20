// CSV Writer - Refactor

import { existsSync, mkdirSync, appendFileSync, unlinkSync } from 'fs'

export class CSVWriter<T> {
    // keyof type operator returns a union of type declaration's keys
    constructor(private columns: (keyof T)[]) {
        this.csv = `${this.columns.join(',')}\n`
    }

    private csv: string

    save(pathName: string): void {
        const dirName = pathName.split('/')[0]
        if (!existsSync(dirName)) mkdirSync(dirName)
        if (existsSync(pathName)) unlinkSync(pathName)
        appendFileSync(pathName, this.csv)
        this.csv = '\n'
        console.log('file saved to :=>', pathName)
    }
    addRows(values: T[]): void {
        const rows = values.map(v => this.formatRow(v))
        this.csv = `${this.csv}${rows.join('\n')}`
    }
    private formatRow(values: T): string {
        return this.columns.map(col => values[col]).join(',')
    }
}
