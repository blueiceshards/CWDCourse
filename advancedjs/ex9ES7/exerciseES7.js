// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.includes('John')); // false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.

// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

const filterArray = dragons.filter(name => name.includes("John") === true);
console.log(filterArray);

console.log(dragons.filter(name => name.includes("John")));

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const exp = (num) => num**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

console.log(exp(10000)); // Infinity

// The number Infinity is a special value in JavaScript that represents mathematical infinity and overflow values — numbers so large they “overflow” the buffer and result in Infinity. It results from calculations creating numbers beyond a special maximum value in JavaScript, a value that is about 1.79e+308 or 2¹⁰²⁴— the largest value that can be stored as a number primitive type in JavaScript.