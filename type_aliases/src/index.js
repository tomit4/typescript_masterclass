"use strict";
// Type Aliases
const pet1 = 'cat';
const pet2 = 'dog';
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = { name: 'mario', score: 75 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}.`);
}
formatUser(userOne);
formatUser({ name: 'yoshi', score: 100 });
// NOTE: While at first glance Type Aliases and Interfaces may appear very similar as they both allow to create what appear to be custom types, specifically Interfaces are utilized primarily to define expected types to be returned bye specific keys within objects (see interfaces directory).
