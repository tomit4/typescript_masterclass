// Extending Interfaces

interface hasFormatter {
    format(): string
}

interface Bill extends hasFormatter {
    id: string | number
    amount: number
    server: string
}

const user = {
    id: 1,
    format(): string {
        return `This user has an id of ${this.id}`
    },
}

const bill = {
    id: 2,
    amount: 50,
    server: 'mario',
    format(): string {
        return `Bill with id ${this.id} has £${this.amount} to pay`
    },
}

function printFormatted(val: hasFormatter): void {
    console.log(val.format())
}

function printBill(bill: Bill): void {
    console.log('server: ', bill.server)
    console.log(bill.format())
}

// Testing the Functions
printFormatted(user)
printFormatted(bill)
// not allowed printBill expects a type instance of Bill,
// which needs an amount and server field
// printBill(user)
printBill(bill)
