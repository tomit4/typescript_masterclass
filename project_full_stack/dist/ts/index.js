"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = require("./models/Pizza");
// 'as' keyword  tells TypeScript compiler to
// assume it is whatever you tell it to,
// in this case an everyday HTMLElement
const rootElement = document.querySelector('.root');
function createPizzaTemplate(pizza) {
    return `
        <div class="pizza">
            <h2>${pizza.title}...</h2>
            <p class="toppings">${pizza.toppings.join(', ')}</p>
            <p>${pizza.description}</p>
            <span>£${pizza.price}</span>
        </div>
        `;
}
function renderTemplates(templates, parent) {
    const templateElement = document.createElement('template');
    for (const t of templates) {
        templateElement.innerHTML = `${templateElement.innerHTML}${t}`;
    }
    parent.append(templateElement.content);
}
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    // load the pizzas data
    const pizzas = yield Pizza_1.Pizza.loadAll();
    console.log('pizzas :=>', pizzas);
    // create template string for each pizza
    const pizzaTemplates = pizzas.map(createPizzaTemplate);
    // render pizza templates to DOM
    renderTemplates(pizzaTemplates, rootElement);
}));
