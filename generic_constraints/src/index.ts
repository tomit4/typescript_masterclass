// Generic Constraints

interface HasId {
    id: number
}

// This "extends" keyword may appear at first glance
// to be the same as the "&" character from the Intersection tutorial
// BUT Type Intersection generally "marries" two types together, whereas
// "extends" is limited to interfaces and interface-like-types (i.e. classes).
// Class Extension does not allow for overwriting of key/value key/types,
// while Type Intersection is more permissive and allows overwriting of key/value key/types.
// Lastly, Type Intersection allows for creating a new type based off of two types,
// but class TYPE extension establishes a new type contract that ensures that the
// new class type adheres to both the Parent Class's type interface contract (the
// Generic<T> in this case), but also the passed Child Class's interface contract (HasId)

class DataCollection<T extends HasId> {
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
    deleteOne(id: number): void {
        this.data = this.data.filter(item => item.id !== id)
    }
}

interface User {
    name: string
    score: number
    // Required to satisfy the HasId Constraint:
    id: number
}

const users = new DataCollection<User>([
    { name: 'shaun', score: 125, id: 1 },
    { name: 'mario', score: 100, id: 2 },
    { name: 'peach', score: 150, id: 3 },
])

users.deleteOne(2)
console.log('load all :=>', users.loadAll())
