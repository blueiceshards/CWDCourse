// Advanced arrays

const array = [1, 2, 10, 16];

/* 

const newArray = array.forEach((num) => {
    num * 2;
})

console.log(newArray); // undefined because just multiplying numbers by 2 but not storing anywhere
 */

//instead, do:

const double = [];
const newArray = array.forEach((num) => {
    double.push(num*2);
})

console.log('forEach', double);

// map, filter, and reduce

const mapArray = array.map((num) => {
    return num*2;
})

// map needs to return something. foreach: just loops over something and does whatever the function says. vs with the array map, loop over each element each number and return a new array.

// Everytime the array loops, we reutrn 1*2. 

console.log('mapArray', mapArray);

// whenever you want to do a simple loop over an array, you want to use map over foreach. with foreach, the opeartion does not do anything. all foreach cares about is to iterate overa  collection of elements and oerate operation on each element. map - expects the operation to return an element. the map iterates and loops thorugh a collection of elements, doing the operations on each element, and storing the results of each invokation of the oepration into another collection, i.e. mapArray in this case. map transforms the aray and creates a new array, mapArray. v.s. foreach, which does a whole bunch of actions based on the array and those actions are aren't that limited. if we want to return a enw array, we need to create  a new array and push. 

// forEach -> a whole bunch of side effects, clog, create a new array, push to that array, returns undefined, and also not really returning anything. v.s. with a Map, all the side effects are gone and also with a map, we have to return. 

// if we don't return with map:

const mapArrayWrong = array.map((num) => {
    num*2;
})

console.log(mapArrayWrong); // [undefined, undefined, undefined, undefined]

// mapArray - we have created a pure function. no side effects, and also returns a value. we want to keep things acting in an expected way. we don't want a piece of code living on the website for 4 years and all of the sudden have all these weird side effects. also, we are not changing the original array. stays the same with map because we create a new copy of the array - does not mutate the original array.

// when we only have a single parameter, we can avoid the bracket, like so:

const mapArrayGood = array.map(num => num*2);
console.log('good map', mapArrayGood);

// filter

/* const filterArray = array.filter(num => {
    return num > 5; // must return
}) */

const filterArray = array.filter(num => num > 5); // shortform for return ...

console.log('filter', filterArray);

// reduce - very powerful, can do both filtering and mapping. 

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 5 ); // = 34 because acc = 5, i.e. default value of accumulator. 5 + 1 + 2+ 10 + 16 = 34 

console.log(reduceArray);

// num refers to 1, 2, 10, 16
// accumulator, aka acc, something where we can store the information that happens in the body of the function.  

// Great resource to explore array methods: https://sdras.github.io/array-explorer/