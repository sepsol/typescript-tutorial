// === 1 ===
const anchor1 = document.querySelector('a');
// const anchor1: HTMLAnchorElement | null

// console.log(anchor1.href);
if (anchor1) console.log(anchor1.href);

// === 2 ===
const anchor2 = document.querySelector('a')!;
// const anchor2: HTMLAnchorElement

console.log(anchor2.href);

// ===============================

const form1 = document.querySelector('form')!;
// const form1: HTMLFormElement

const form2 = document.querySelector('.new-item-form')!;
// const form2: Element

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// ===============================

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.value);
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
