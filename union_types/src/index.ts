// Union Types

// Interesting side note, to allow for Nullable types:
// https://stackoverflow.com/questions/17220114/how-to-declare-a-type-as-nullable-in-typescript
type Nullable<T> = T | null
interface Employee {
    id: number
    name: string
    salary: Nullable<number>
}

let someId: number | string

someId = 1
someId = '2'
// someId = ['something'] // Compiler error

let email: string | null = null // not sure why '=' is necessary here...

email = 'mario@netninja.dev'
email = null

type Id = number | string
let anotherId: Id

// anotherId = undefined // Compiler error
anotherId = '1'
anotherId = 2

// Union Type Pitfall

function swapIdType(id: Id): Id {
    // can only use pros and methods common to
    // both number and string types
    // parseInt(id) --> not allowed
    return id
}
