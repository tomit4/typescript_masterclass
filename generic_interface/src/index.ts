// Generic Interface

// interface Collection takes Generic <T>
// as type for data array to be filled with.
interface Collection<T> {
    data: T[]
    name: string
}

//  Collection still requires data to be an array
//  and name to be a string,
//  but now data array MUSt have a string as the
//  Generic is defined as <string>
const collectionOne: Collection<string> = {
    data: ['mario', 'luigi', 'peach'],
    name: 'mario characters',
}
// And similary here, data must be an array of numbers
const collectionTwo: Collection<number> = {
    data: [10, 15, 27, 3, 9, 34],
    name: 'winning lottery numbers',
}

function randomCollectionItem<T>(c: Collection<T>): T {
    const i = Math.floor(Math.random() * c.data.length)
    return c.data[i]
}

const resultOne = randomCollectionItem<string>(collectionOne)
const resultTwo = randomCollectionItem(collectionTwo)

// Fails because collectionOne has a data type of T[],
// BUT, we define the type of T in collectionOne as a
// type of Collection<string> with the Generic being
// defined as string.
// const resultThree = randomCollectionItem<number>(collectionOne)

console.log('resultOne :=>', resultOne)
console.log('resultTwo :=>', resultTwo)
