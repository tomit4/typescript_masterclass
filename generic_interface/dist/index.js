"use strict";
// Generic Interface
//  Collection still requires data to be an array
//  and name to be a string,
//  but now data array MUSt have a string as the
//  Generic is defined as <string>
const collectionOne = {
    data: ['mario', 'luigi', 'peach'],
    name: 'mario characters',
};
// And similary here, data must be an array of numbers
const collectionTwo = {
    data: [10, 15, 27, 3, 9, 34],
    name: 'winning lottery numbers',
};
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const resultOne = randomCollectionItem(collectionOne);
const resultTwo = randomCollectionItem(collectionTwo);
// Fails because collectionOne has a data type of T[],
// BUT, we define the type of T in collectionOne as a
// type of Collection<string> with the Generic being
// defined as string.
// const resultThree = randomCollectionItem<number>(collectionOne)
console.log('resultOne :=>', resultOne);
console.log('resultTwo :=>', resultTwo);
