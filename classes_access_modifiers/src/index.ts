// Access Modifiers

type Base = 'classic' | 'thick' | 'thin' | 'garlic'

// NOTE: This is the first time we see the private keyword here
// this.title and this.price are accessible within the class methods and properties,
// but not outside of the scope of the Pizza class
class Pizza {
    constructor(
        private title: string,
        private price: number,
    ) {
        this.title = 'myTitle'
        this.price = 30
    }

    // title: string
    // price : number
    private base: Base = 'classic'
    private toppings: string[] = []
    addTopping(topping: string): void {
        this.toppings.push(topping)
    }
    removeToppings(topping: string): void {
        this.toppings = this.toppings.filter(t => t !== topping)
    }
    selectBase(b: Base): void {
        this.base = b
    }
    sayTitleAndPrice(): void {
        console.log('this.title :=>', this.title)
        console.log('this.price:=>', this.price)
    }
}

const pizza = new Pizza('mario special', 15)

pizza.selectBase('garlic')
pizza.addTopping('mushrooms')
pizza.addTopping('olives')

console.log('pizza :=>', pizza)
pizza.sayTitleAndPrice()
// Compile Time Error: not allowed as title and price are private
// console.log(pizza.title, pizza.price, pizza.toppings)
