"use strict";
// Generics 101
// Lets say we have three functions with similar functionality,
// but the only difference is they return different types...
function logAndReturnString(val) {
    console.log(val);
    return val;
}
function logAndReturnNumber(val) {
    console.log(val);
    return val;
}
function logAndReturnBoolean(val) {
    console.log(val);
    return val;
}
// Generics allow us to define a "generic" function where
// it only has to be defined once, and can return any type...
// Technically we could simply pass the ': any'
// type declaration in our arguments, to achieve the same thing here,
// but we'd lose typesafety (defaulting just to JS)...
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
// As you can see here however, we are able to still
// define the type on the invokating line itself
logAndReturnValue('mario');
logAndReturnValue(25);
// Example Two
// While this technically simply returns a
// random element from an array of anything...
function getRandomArrayValue(values) {
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}
// And then define an array that accepts
// only instances of that type interface
const users = [
    { name: 'mario', score: 100 },
    { name: 'peach', score: 150 },
    { name: 'wario', score: 75 },
    { name: 'yoshi', score: 90 },
];
// And then define the accepted type here...
// where <User> gets passed as a <T> generic
// in the function declaration above
const randomUser = getRandomArrayValue(users);
console.log(randomUser.name);
