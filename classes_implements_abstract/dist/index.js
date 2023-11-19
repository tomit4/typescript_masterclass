"use strict";
// Abstract class can be thought of as classes only to be inherited from
// Subsequently, since MenuItem implements hasFormatter,
// the format() method can either not be abstract (and return a string),
// OR it can be abstracted, where only the return type is declared
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - £${this.price}`;
    }
}
// compiler error, cannot create instance of abstract class
// const cantInstantiate = new MenuItem()
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
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
    format() {
        let formatted = `${this.details}\n`;
        // base
        formatted = `${formatted}Pizza on a ${this.base} base`;
        // toppings
        if (this.toppings.length < 1) {
            formatted = `${formatted} with toppings.`;
        }
        if (this.toppings.length > 0) {
            formatted = `${formatted} with: ${this.toppings.join(', ')}`;
        }
        return formatted;
    }
}
const pizza = new Pizza('mario special', 15);
// select base
pizza.selectBase('garlic');
// add items
pizza.addTopping('mushrooms');
pizza.addTopping('peppers');
pizza.addTopping('olives');
function printFormatted(val) {
    console.log(val.format());
}
printFormatted(pizza);
