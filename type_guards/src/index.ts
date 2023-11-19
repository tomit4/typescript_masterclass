// Type Guards

// Example 1
type Id = number | string

// Resolving from Union Types Example previously,
// uses 'typeof' operation to determine if type is string or number,
// then calls either globalThis.parseInt() or String.prototype.toString()
// method to process passed id
function swapIdType(id: Id): Id {
    if (typeof id === 'string') {
        return parseInt(id)
    } else {
        return id.toString()
    }
}

const idOne = swapIdType(1)
const idTwo = swapIdType('2')

console.log('idOne :=>', idOne)
console.log('idTwo :=>', idTwo)

// Tagged Union Types
interface User {
    type: 'user'
    username: string
    email: string
    id: Id
}

interface Person {
    type: 'person'
    firstname: string
    age: number
    id: Id
}

function logDetails(value: User | Person): void {
    if (value.type === 'user') {
        console.log(value.email, value.username)
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age)
    }
}

const testUser: User = {
    type: 'user',
    username: 'Bob',
    email: 'bob@email.com',
    id: '1',
}

const testPerson: Person = {
    type: 'person',
    firstname: 'John',
    age: 35,
    id: 1,
}

logDetails(testUser)
logDetails(testPerson)
