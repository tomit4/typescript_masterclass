"use strict";
// Generic Constraints
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
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
    deleteOne(id) {
        this.data = this.data.filter(item => item.id !== id);
    }
}
const users = new DataCollection([
    { name: 'shaun', score: 125, id: 1 },
    { name: 'mario', score: 100, id: 2 },
    { name: 'peach', score: 150, id: 3 },
]);
users.deleteOne(2);
console.log('load all :=>', users.loadAll());
