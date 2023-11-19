"use strict";
// Extending Type Aliases
// personOne does not satisfy User type because is missing email
// personOne does satisfy Person type though
const personOne = {
    id: 1,
    firstName: 'mario',
};
// personTwo satisfies User type
const personTwo = {
    id: '2',
    firstName: 'yoshi',
    email: 'yoshi@netninja.dev',
};
// personThree does not satisfy User type beaause is missing id and firstName
// personThree would satisfy User type if it did not extend Person (hence '&' syntax)
const personThree = {
    email: 'peach@netninja.dev',
};
function printUser(user) {
    console.log(user.id, user.email, user.firstName);
}
// printUser(personOne) // not allowed
printUser(personTwo);
// printUser(personThree) // not allowed
