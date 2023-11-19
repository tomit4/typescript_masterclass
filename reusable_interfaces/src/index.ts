// Reusable Interfaces
//
interface hasQuantity {
    quantity: number
}

// Not allowed
// const something: hasQuantity = { title: 'hello', quantity: 50 }

function printQuantity(item: hasQuantity): void {
    // can only access know properties - quantity
    console.log(`the quantity of this item is ${item.quantity}`)
}

// Notice below that fruit and vehicle pass,
// even though name isn't part of the hasQuantity interface,
// However, if the quantity key isn't included like in the
// person object, the TS compiler will throw an error

const fruit = {
    name: 'mango',
    quantity: 50,
}
const vehicle = {
    name: 'car',
    quantity: 3,
}
const person = {
    name: 'mario',
    age: 30,
}

printQuantity(fruit)
printQuantity(vehicle)
// printQuantity(person) // not allowed

// Passing object literals directly has to
// include only known interface properties
// printQuantity({quantity: 50, title: 'something'})
