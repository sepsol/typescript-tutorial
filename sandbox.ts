//
// explicit types
let fname: string;
let num: number;
let bool: boolean;

num = 2;
// num = '2';
// num = true;

//
// arrays
let arrayOne: any[];
arrayOne = [1, 'two', true];

let arrayTwo: string[] = [];
arrayTwo.push('one');

//
// union types
let arrayThree: (string | number)[] = [];
arrayThree.push(1);
arrayThree.push('2');

//
// objects
let objectOne: object;
objectOne = {
  fname: 'sep',
  lname: 'sol'
};

let objectTwo: {
  fname: string;
  lname: string;
  age: number;
};

objectTwo = {
  fname: 'sah',
  lname: 'sol',
  age: 22
};
