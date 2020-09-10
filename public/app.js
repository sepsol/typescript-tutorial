import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    type.value === 'invoice'
        ? (doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber))
        : (doc = new Payment(tofrom.value, details.value, amount.valueAsNumber));
    console.log(doc.format());
});
