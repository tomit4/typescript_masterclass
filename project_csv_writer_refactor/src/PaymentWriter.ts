import { CSVWriter } from '.'

interface Payment {
    id: number
    amount: number
    to: string
    notes: string
}

const paymentsWriter = new CSVWriter<Payment>(['amount', 'notes', 'id', 'to'])

// Add Initial Rows
paymentsWriter.addRows([
    { id: 1, amount: 30, notes: 'payment for plumbing work', to: 'yoshi' },
    { id: 2, amount: 50, to: 'peach', notes: 'payment for design work' },
    { id: 3, amount: 25, to: 'yoshi', notes: 'clearing a debt' },
])

// save the file
paymentsWriter.save('data/payments.csv')
