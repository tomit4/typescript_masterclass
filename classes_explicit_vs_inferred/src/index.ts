type Base = 'classic' | 'thick' | 'thin' | 'garlic'

class Pizza {
    constructor(
        private title: string,
        private price: number,
    ) {}

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

// Explicit, i.e. TypeScript way of instantiating a new class
const pizzaOne: Pizza = new Pizza('mario special', 15)

// Inferred, i.e. JavaScript style way of instantiating a new class
const pizzaTwo = new Pizza('luigi special', 10)

function addMushroomsToPizzas(pizzas: Pizza[]): void {
    for (const p of pizzas) {
        p.addTopping('mushrooms')
    }
}

addMushroomsToPizzas([pizzaOne, pizzaTwo])

console.log(pizzaOne, pizzaTwo)
