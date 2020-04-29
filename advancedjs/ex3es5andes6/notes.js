// Javascript Variables
/* 

var
let *new in ECMAScript 6*
const *new in ECMAScript 6 -> stands for constant

*/

//const player = "bobby";
//let experience = 100;
//let wizardLevel = false;

//if (experience > 90) {
//    let wizardLevel = true;
//    console.log("inside", wizardLevel); //true here.
//}

// console.log("outside", wizardLevel); //false which is weird because if wizardLevel was a variable, it would have been true because wizardLevel just changes - no new scope is created inside an if statement because this is not a function.

// with variables, we only can create a scope inside a function ,but not within curly brackets of "if". 

// with let, we have created a wizardLevel that only exists in the if. any time it's wrapped in curly brackets, it creates a new scope. 

// Do not use variables anymore - they are quite confusing. think of let be the new variables. now, use let for variables.

// const: if you wnat to change player name to "sally", you will get an error - assignment to constant variable. e.g.  player = "sally";  you cannot update variables that are const. this is good because it prevents bugs related to changes. it makes sure that player value is always the asme value. if you have stuff that's not going to shcange, you should call it a constant. e.g. a function can be a constant. if the function or the assignment of a is not going to change, feel safer to use const than let to ensure that nobody assigns something else to a.

const a = function () {
    console.log("a");
}

console.log(a);

// Rule: use const for a variable that does not change. if you're using a variable that you will want to reassign something to, use let. 

const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
}

// you cannot reassign obj to something else e.g. obj = 5, you cannot reassign the variable. however, you can change a property of the const object, e.g. obj.wizardLevel = true;

obj.wizardLevel = true;

console.log(obj);

// Destructuring -> will  make your life a whole lot easier.

/* const player = obj.player; ---(a)
const experience = obj.experience; ---(b)
let wizardLevel = obj.wizardLevel; ---(c) */

const { player, experience } = obj; // is equals to (a) and (b) above
let { wizardLevel } = obj; // is equals to (c) above

console.log(player, experience, wizardLevel);


// Object Properties

const name = "John Snow";

const obj2 = {
    [name]: "Hello",
    ["Ray" + "Smith"]: "Hihi",
    [1 + 2]: "Hihi"
}

console.log(obj2);


const b = "Simon";
const c = true;
const d = {};

// If we want to add these to an object, we can do the following. sometimes ,we want the propoerty to match the value.

/* const obj3 = {
    b: b,
    c: c,
    d: d
}
 */

// But with const, we can do the following:

const obj3 = {
    b, c, d
}
// if property and value are the same, we can just say b, c, d. is very useful for React section.

console.log(obj3);

//Template strings

// Lame method:
/* const name2 = "Sally";
const greeting = "Hello " + name2 + " you seem to be doing great!";
console.log(greeting); */



// Cool method: use `` template strings.
const name2 = "Sally";
const age2 = 34;
const pet2 = "horse";
// const greetingBest = `Hello ${name2} you seem to be ${age - 10}. What a lovely ${pet} you have!`
// console.log(greetingBest);

// Default arguments
function greet(name = "", age = 30, pet = "cat") { // if I don't provide any arguments, make these the default. make name2 ="", age=30, pet=cat.
    return `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have!`
}
console.log(greet());
console.log(greet("john", 50, "monkey"));


// must call the same things for defautl arguments, if not will use the const stored in the root (window). name, age, pet, is grayed out.
function greet2(name = "", age = 30, pet = "cat") { // if I don't provide any arguments, make these the default. make name2 ="", age=30, pet=cat.
    return `Hello ${name2} you seem to be ${age2 - 10}. What a lovely ${pet2} you have!`
}
console.log(greet2());

// Symbol

let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

console.log(sym2 === sym3); // false even though is the same thing. symbols are used because they create a completely unique type. you can make sure there is completely no conflict. the symbol value is used for indentifier mostly for object properties - sometimes you don't want object properties (1000+ sometimes) to collide and be the same ones --> bugs. but not seen much. 

// Arrow functions

// Lame method:
/* 
function add(a,b) {
    return a + b;
}
 */

// Cool method:

const add = (a, b) => a + b; // if you have a single return, you can just put it on one line and it will assume you are returning the stuff after the arrows. it's very nice and a lot easier to write than the old method. new ways of doing things.

const add2 = (a, b) => {
    return a + b;
}

console.log(add(10,12));
console.log(add2(10,12));

// Moving forward, will use the new syntaxes to write our code. 

// Babel (compiler that converts ES6 to javascript that is backward compatible): https://babeljs.io/repl/ 