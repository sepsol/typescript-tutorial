var obj = {
    fname: 'sep',
    lname: 'sol',
    age: 24,
    isNinja: false
};
// assigning values individually to an object is ok
obj.fname = 'sepehr';
obj.age = 25;
// obj.age = '25';
// obj.newProperty = false;
// assigning values alltogether to an object is ok
obj = {
    fname: 'sah',
    lname: 'sol',
    age: 22,
    isNinja: true
};
// but you can't remove, change, or add properties
/*
obj = {
  // fname: 'sah', // <<<
  lname: 'sol',
  age: '22', // <<<
  isNinja: true,
  newProperty: false // <<<
};
*/
