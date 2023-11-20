"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
const DataResources_1 = require("../services/DataResources");
exports.Pizza = new DataResources_1.DataResource('http://localhost:8080/db.json');
// Pizza.save({
// title: 'my new pizza',
// description: 'yummy',
// toppings: ['mushrooms', 'peppers', 'olives'],
// price: 10,
// })
