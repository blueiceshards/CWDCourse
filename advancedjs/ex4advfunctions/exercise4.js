//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const add = (a, b) => a + b;
console.log(add(5,2));

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) 

// addToTen(3)
// = addTo(10)(3)
// = 10 + 3 = 13

console.log(addToTen(3));


//Currying: What does the last line return?
// const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
console.log(curriedSum(30)(1));

//Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) 

// add5 = curriedSum(5)
// add5(12) = curriedSum(5)(12) = 5 + 12 = 17

console.log(add5(12));

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const Add5 = (num) => num + 5;
compose(add1, Add5)(10);

// compose(add1, Add5)(10)
// = add1(Add5(10))
// = (Add5(10)) + 1
// = (10+5)+1
// = 16

console.log(compose(add1,Add5)(10));

// What are the two elements of a pure function?
// No side effects (it does not depend on any state, or data, changed during a program's execution. it must only depend on its input elements) and deterministic (always produces the same results given the same inputs)