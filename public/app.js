"use strict";
// === 1 ===
var anchor1 = document.querySelector('a');
// const anchor1: HTMLAnchorElement | null
// console.log(anchor1.href);
if (anchor1)
    console.log(anchor1.href);
// === 2 ===
var anchor2 = document.querySelector('a');
// const anchor2: HTMLAnchorElement
console.log(anchor2.href);
// ===============================
var form1 = document.querySelector('form');
// const form1: HTMLFormElement
var form2 = document.querySelector('.new-item-form');
// const form2: Element
var form = document.querySelector('.new-item-form');
console.log(form.children);
// ===============================
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
