import { Pizza, PizzaProps } from './models/Pizza'

// 'as' keyword  tells TypeScript compiler to
// assume it is whatever you tell it to,
// in this case an everyday HTMLElement
const rootElement = document.querySelector('.root') as HTMLElement

function createPizzaTemplate(pizza: PizzaProps): string {
    return `
        <div class="pizza">
            <h2>${pizza.title}...</h2>
            <p class="toppings">${pizza.toppings.join(', ')}</p>
            <p>${pizza.description}</p>
            <span>£${pizza.price}</span>
        </div>
        `
}

function renderTemplates(templates: string[], parent: Element): void {
    const templateElement = document.createElement('template')
    for (const t of templates) {
        templateElement.innerHTML = `${templateElement.innerHTML}${t}`
    }
    parent.append(templateElement.content)
}

document.addEventListener('DOMContentLoaded', async () => {
    // load the pizzas data
    const pizzas = await Pizza.loadAll()
    console.log('pizzas :=>', pizzas)

    // create template string for each pizza
    const pizzaTemplates = pizzas.map(createPizzaTemplate)

    // render pizza templates to DOM
    renderTemplates(pizzaTemplates, rootElement)
})
