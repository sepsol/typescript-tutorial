let names = ['sep', 'sah', 'shi'];

// names = 'not a string';

names.push('ali');
// names.push(2);
// names[0] = true;

let numbers = [2, 4, 6, 8];

numbers.push(10);
// numbers.push('one');
// numbers[0] = true;

let namesNnums = ['one', 2, 'three', 4, 'five', 6];

namesNnums.push(7);
namesNnums[1] = 'two';
// namesNnums.push(true);

// let numsNbools: number[] | boolean[] = ['one'];
// let numsNbools: number[] | boolean[] = [1, 2, 3, 4];
let numsNbools: (number | boolean)[] = [1, 2, 3, 4];

numsNbools.push(7);
numsNbools[1] = true;
// numsNbools.push('true');
