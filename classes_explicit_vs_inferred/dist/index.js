"use strict";
class Pizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.base = 'classic';
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter(t => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
// Explicit, i.e. TypeScript way of instantiating a new class
const pizzaOne = new Pizza('mario special', 15);
// Inferred, i.e. JavaScript style way of instantiating a new class
const pizzaTwo = new Pizza('luigi special', 10);
function addMushroomsToPizzas(pizzas) {
    for (const p of pizzas) {
        p.addTopping('mushrooms');
    }
}
addMushroomsToPizzas([pizzaOne, pizzaTwo]);
console.log(pizzaOne, pizzaTwo);
