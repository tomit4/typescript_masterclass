"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
// employee write
const employeeWriter = new _1.CSVWriter(['id', 'name', 'salary', 'role']);
employeeWriter.addRows([
    { id: 1, name: 'shaun', salary: 50000, role: 'web developer' },
    { id: 2, name: 'jay', salary: 50000, role: 'digital manager' },
    { id: 3, name: 'toad', salary: 100000, role: 'director' },
]);
employeeWriter.save('data/employees.csv');
