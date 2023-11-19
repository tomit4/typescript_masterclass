// Any Type

let age: any
let title

age = 30
age = false

title = 25

title = {
    hello: 'world',
}

// Any type in arrays

let things: any[] = ['hello', true, 30, null]

things.push({ id: 123 })

// Functions & Any

function addTogether(value: any): any {
    return value + value
}
const resultOne = addTogether('hello')
const resultTwo = addTogether(3)

console.log('resultOne :=>', resultOne)
console.log('resultTwo :=>', resultTwo)

// Useful when migrating from JS to TS
// Because using any won't cause errors initially
