// Function Signature Example 1
let add: (a: number, b: number) => void;
add = (a: number, b: number): void => {
  console.log(a + b);
};

// Function Signature Example 2
let subtract: (a: number, b: number) => void;
subtract = (numOne, numTwo) => {
  console.log(numOne - numTwo);
};

// Function Signature Example 3
let operate: (a: string, n1: number, n2: number) => number;
operate = (action, num1, num2) => {
  switch (action) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    default:
      return 0;
  }
};
