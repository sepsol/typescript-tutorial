"use strict";
function fOne() {
    console.log('one');
}
function fTwo() {
    console.log('two');
}
var fThree;
// fThree = 3;
fThree = function () { return console.log('three'); };
var fFour = function () {
    console.log('four');
};
var fFive = function (a, b) {
    console.log(a + b);
};
var fSix = function (a, b, c) {
    console.log(a + b);
};
var fSeven = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b + c);
};
