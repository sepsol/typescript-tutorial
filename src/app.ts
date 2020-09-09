class Invoice {
  // client: string;
  // details: string;
  // amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('mario', 'website design', 200);
const invTwo = new Invoice('luigi', 'android application', 350);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

// testing modifiers:

// CHANGING VALUES FROM OUTSIDE:
// invOne.client = 'readonly';
// invOne.details = 'private';
invOne.amount = 50; // public

// READING VALUES FROM OUTSIDE:
console.log(invOne.client);
// console.log(invOne.details);
console.log(invOne.amount);

// READING VALUES FROM INSIDE:
console.log(invOne.format());
