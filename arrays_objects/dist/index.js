"use strict";
// Arrays
const names = ['Mario', 'Luigi', 'Peach'];
const ages = [25, 28, 24];
names.push('bowser');
ages.push(35);
// Type Inference With Arrays
const fruits = ['apples', 'pears', 'bananas', 'mangos'];
fruits.push('peaches'); // no problem
// fruits.push(45) // error, inferred as array of string upon declaration
const things = [1, true, 'hello']; // example of Union type, can accept number, boolean, or string types
const t = things[0];
console.log('t :=>', t);
// Object Literals
// When defined, assignment MUST have corresponding
// key/value pairs of properName for key, and properType for value
const user = {
    firstName: 'mario',
    age: 30,
    id: 1,
};
// user.firstName = 25 // complains not a number
user.firstName = 'peach';
// user.email = 'peach@netninja.dev' // complains that email property doesn't exist
// user.id = '2' //complains not a number
// Type Inference With Object Literals
let person = {
    name: 'luigi',
    score: 35,
};
