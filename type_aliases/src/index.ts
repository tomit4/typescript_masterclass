// Type Aliases

// Aliases allow us to create types that explicitly
// refer to a specified value, e.g.:
// let pet: 'cat'
// pet = 'cat' // OK
// pet = 'dog' // Compiler error
// Of Course, you can create Union type by declaring it as such, e.g.:
// let pet: 'cat' | 'dog'
// And therefore in this case:
// pet = 'cat' // OK
// pet = 'dog' // OK
// pet = 'zebra' // Compiler error

// Creating Type Aliases
// the 'type' keyword allows us to create a new type
type pet = 'cat' | 'dog'

const pet1: pet = 'cat'
const pet2: pet = 'dog'
// const pet3: pet = 'zebra' // Compiler error

// Example of Type Aliases with Tuple

type Rgb = [number, number, number]

function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return [r, g, b]
}

const colorOne = getRandomColor()
const colorTwo = getRandomColor()
console.log(colorOne, colorTwo)

// Example of Type Aliases with Object Literal

type User = {
    name: string
    score: number
}

const userOne: User = { name: 'mario', score: 75 }
function formatUser(user: User): void {
    console.log(`${user.name} has a score of ${user.score}.`)
}

formatUser(userOne)
formatUser({ name: 'yoshi', score: 100 })

// NOTE: While at first glance Type Aliases and Interfaces may appear very similar as they both allow to create what appear to be custom types, specifically Interfaces are utilized primarily to define expected types to be returned bye specific keys within objects (see interfaces directory).
