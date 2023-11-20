"use strict";
// CSV Writer - Refactor
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVWriter = void 0;
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = `${this.columns.join(',')}\n`;
    }
    save(pathName) {
        const dirName = pathName.split('/')[0];
        if (!(0, fs_1.existsSync)(dirName))
            (0, fs_1.mkdirSync)(dirName);
        (0, fs_1.appendFileSync)(pathName, this.csv);
        this.csv = '\n';
        console.log('file saved to :=>', pathName);
    }
    addRows(values) {
        const rows = values.map(v => this.formatRow(v));
        this.csv = `${this.csv}${rows.join('\n')}`;
    }
    formatRow(values) {
        return this.columns.map(col => values[col]).join(',');
    }
}
exports.CSVWriter = CSVWriter;
