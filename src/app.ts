import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// declaring two objects and making sure that they implement the HasFormatter interface
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('mario', 'website work', 300);
docTwo = new Payment('luigi', 'plumbing', 550);

// creating an array that has objects that implement HasFormatter interface
let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

//

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
