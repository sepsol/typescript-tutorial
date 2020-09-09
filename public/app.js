"use strict";
var Invoice = /** @class */ (function () {
    // client: string;
    // details: string;
    // amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'website design', 200);
var invTwo = new Invoice('luigi', 'android application', 350);
var invoices = [];
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
