"use strict";
function swapIdType(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('2');
console.log('idOne :=>', idOne);
console.log('idTwo :=>', idTwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age);
    }
}
const testUser = {
    type: 'user',
    username: 'Bob',
    email: 'bob@email.com',
    id: '1',
};
const testPerson = {
    type: 'person',
    firstname: 'John',
    age: 35,
    id: 1,
};
logDetails(testUser);
logDetails(testPerson);
