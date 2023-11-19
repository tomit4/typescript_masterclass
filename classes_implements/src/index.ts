type Base = 'classic' | 'thick' | 'thin' | 'garlic'

interface hasFormatter {
    format(): string
}

// In TypeScript, the 'implements' keyword is meant to
// verify that a class conforms to a specific interface,
// in this case the hasFormatter interface
class MenuItem implements hasFormatter {
    constructor(
        private title: string,
        private price: number,
    ) {}

    get details(): string {
        return `${this.title} - £${this.price}`
    }
    // As long as this method returns a string,
    // it is implementing the hasFormatter interface correctly
    format() {
        return `This menu item is called ${this.title} and is £${this.price}`
    }
    // Compiler Error, format() returns wrong
    // type according to hasFormatter interface
    // format() {
    // return 15
    // }
}

class Pizza extends MenuItem {
    constructor(title: string, price: number) {
        super(title, price)
    }

    private base: Base = 'classic'
    private toppings: string[] = []

    addTopping(topping: string): void {
        this.toppings.push(topping)
    }
    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter(t => t !== topping)
    }
    selectBase(b: Base): void {
        this.base = b
    }
}

const pizza = new Pizza('mario speciaol', 15)

// select base
pizza.selectBase('garlic')

// add items
pizza.addTopping('mushrooms')
pizza.addTopping('peppers')
pizza.addTopping('olives')

function printFormatted(val: hasFormatter): void {
    console.log(val.format())
}

printFormatted(pizza)
