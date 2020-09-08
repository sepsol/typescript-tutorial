"use strict";
// Function Signature Example 1
var add;
add = function (a, b) {
    console.log(a + b);
};
// Function Signature Example 2
var subtract;
subtract = function (numOne, numTwo) {
    console.log(numOne - numTwo);
};
// Function Signature Example 3
var operate;
operate = function (action, num1, num2) {
    switch (action) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        default:
            return 0;
    }
};
