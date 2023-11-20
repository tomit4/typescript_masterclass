// Generic Classes

// Generic Classes can be instantiated with a Generic<T> data type
// This allows for when a new Object is defined with that Class,
// like in users below, it can be passed a data type or interface
// that it should conform to upon instantiation.

// Note that this helps with ensuring the data used to instantiate
// the class conforms to type contract, but may not be applicable when different
// types/interfaces are needed when instantiating a class (although this
// hypothetical scenario might be indicative of an anti-pattern)
class DataCollection<T> {
    constructor(private data: T[]) {}
    loadOne(): T {
        const i = Math.floor(Math.random() * this.data.length)
        return this.data[i]
    }
    loadAll(): T[] {
        return this.data
    }
    add(val: T): T[] {
        this.data.push(val)
        return this.data
    }
}

interface User {
    name: string
    score: number
}

const users = new DataCollection<User>([
    { name: 'shaun', score: 125 },
    { name: 'mario', score: 100 },
    { name: 'peach', score: 150 },
])

users.add({ name: 'luigi', score: 50 })

console.log('load one :=>', users.loadOne())
console.log('load all :=>', users.loadAll())
