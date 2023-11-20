import { DataResource } from '../services/DataResources'

export interface PizzaProps {
    title: string
    description: string
    toppings: string[]
    price: number
}

export const Pizza = new DataResource<PizzaProps>(
    // live-server defaults to :8080
    'http://localhost:8080/db.json',
)

// Pizza.save({
// title: 'my new pizza',
// description: 'yummy',
// toppings: ['mushrooms', 'peppers', 'olives'],
// price: 10,
// })
