// Functions

function addTwoNumbers(a: number, b: number): number {
    return a + b
}

const subtractTwoNumbers = (a: number, b: number): number => {
    return a - b
}

addTwoNumbers(3, 9)
subtractTwoNumbers(10, 7)

// you can leave the return type empty, and it will infer it based
// off of the return statement, but if there's no return statement,
// then typescript infers : void return type

function addAllNumbers(items: number[]): number {
    const total = items.reduce((a, c) => a + c, 0)
    console.log('total :=>', total)
    return total
}

addAllNumbers([5, 7, 9, 11, 5, 2, 1])

// Return Type Inference

function formatGreeting(name: string, greeting: string): string {
    return `${greeting}, ${name}`
}

const result = formatGreeting('mario', 'hello')
