"use strict";
// Union Types
let someId;
someId = 1;
someId = '2';
// someId = ['something'] // Compiler error
let email = null; // not sure why '=' is necessary here...
email = 'mario@netninja.dev';
email = null;
let anotherId;
// anotherId = undefined // Compiler error
anotherId = '1';
anotherId = 2;
// Union Type Pitfall
function swapIdType(id) {
    // can only use pros and methods common to
    // both number and string types
    // parseInt(id) --> not allowed
    return id;
}
