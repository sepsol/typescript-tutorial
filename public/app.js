"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
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
