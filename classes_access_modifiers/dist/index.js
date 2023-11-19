"use strict";
// Access Modifiers
// NOTE: This is the first time we see the private keyword here
// this.title and this.price are accessible within the class methods and properties,
// but not outside of the scope of the Pizza class
class Pizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        // title: string
        // price : number
        this.base = 'classic';
        this.toppings = [];
        this.title = 'myTitle';
        this.price = 30;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeToppings(topping) {
        this.toppings = this.toppings.filter(t => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
    sayTitleAndPrice() {
        console.log('this.title :=>', this.title);
        console.log('this.price:=>', this.price);
    }
}
const pizza = new Pizza('mario special', 15);
pizza.selectBase('garlic');
pizza.addTopping('mushrooms');
pizza.addTopping('olives');
console.log('pizza :=>', pizza);
pizza.sayTitleAndPrice();
// Compile Time Error: not allowed as title and price are private
// console.log(pizza.title, pizza.price, pizza.toppings)
