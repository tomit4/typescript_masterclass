"use strict";
// CSV Writer Project
class CSVWriter {
    // When instantiated, the only argument allowed
    // is an array of aforementioned keys
    constructor(columns) {
        this.columns = columns;
        this.csv = `${this.columns.join(', ')}\n`;
    }
    formatRow(p) {
        return this.columns.map(col => p[col]).join(', ');
    }
    printFormattedRows(values) {
        // formats each value with a comma separator
        const rows = values.map(v => this.formatRow(v));
        // then each row is printed below the next separated by a new line
        this.csv = `${this.csv}${rows.join('\n')}`;
        // and logged to the console
        console.log(this.csv);
    }
}
const writer = new CSVWriter(['id', 'amount', 'to', 'notes']);
writer.printFormattedRows([
    { id: 1, amount: 50, to: 'yoshi', notes: 'for design work' },
    { id: 2, amount: 50, to: 'yoshi', notes: 'for design work' },
]);
