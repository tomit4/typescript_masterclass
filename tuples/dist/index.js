"use strict";
// Tuples
// Tuples are now possible in JS via TS,
// you can specify immutable types for specific
// elements within a JS array
const person = ['mario', 30, true];
// person[0] = false; // complains as type: string is required for first element
// Tuple Examples
const hsla = [200, '100%', '50%', 1];
const xy = [94.7, 20.1];
// Must return an array of two numbers
function useCoords() {
    // get coords of something
    const lat = 100;
    const long = 50;
    return [lat, long];
}
// Simple destructuring
const [lat, long] = useCoords();
// Named Tuples
const user = ['peach', 25];
console.log('user :=>', user);
