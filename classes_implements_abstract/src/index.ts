type Base = 'classic' | 'thick' | 'thin' | 'garlic'

interface hasFormatter {
    format(): string
}

// Abstract class can be thought of as classes only to be inherited from
// Subsequently, since MenuItem implements hasFormatter,
// the format() method can either not be abstract (and return a string),
// OR it can be abstracted, where only the return type is declared
abstract class MenuItem implements hasFormatter {
    constructor(
        private title: string,
        private price: number,
    ) {}

    get details(): string {
        return `${this.title} - £${this.price}`
    }

    abstract format(): string
}

// compiler error, cannot create instance of abstract class
// const cantInstantiate = new MenuItem()

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
    format(): string {
        let formatted = `${this.details}\n`
        // base
        formatted = `${formatted}Pizza on a ${this.base} base`
        // toppings
        if (this.toppings.length < 1) {
            formatted = `${formatted} with toppings.`
        }
        if (this.toppings.length > 0) {
            formatted = `${formatted} with: ${this.toppings.join(', ')}`
        }
        return formatted
    }
}

const pizza = new Pizza('mario special', 15)

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
