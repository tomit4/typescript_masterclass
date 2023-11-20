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
const titleInput = document.querySelector('input[name="title]');
const descriptionInptu = document.querySelector('textarea');
const form = document.querySelector('.create');
form.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const data = new FormData(form);
    const newPizza = {
        title: data.get('title'),
        description: data.get('description'),
        toppings: data.getAll('toppings'),
        price: parseInt(data.get('price')),
    };
    const res = yield Pizza_1.Pizza.save(newPizza);
    if (!res.ok) {
        console.log('not able to save the pizza');
    }
    if (res.ok) {
        window.location.href = '/';
    }
}));
