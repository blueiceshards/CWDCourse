// change everything below to the newer Javascript!

// let + const

/* var a = 'test';
var b = true;
var c = 789;
a = 'test2';
*/

let a = "test";
const b = "true";
const c = 789;
a = "test2";

console.log(a, b, c);
 

// Destructuring

/* var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor; */

const person = {
    firstName: "John",
    lastName: "Doe",
    age: "50",
    eyeColor: "blue"
};

const {firstName, lastName, age, eyeColor} = person;
console.log(firstName, lastName, age, eyeColor);

// Object properties

/* var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};
 */

 //a, b, c defined above
const okObj = {a, b, c};
console.log(okObj);

// Template strings

/* var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???"; */

const city = "New York";

const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

console.log(message);

// default arguments
// default age to 10;

/* function isValidAge(age) {
    return age
} */

const isValidAge = (age=10) => age;

console.log(isValidAge(8));
console.log(isValidAge());

// Symbol
// Create a symbol: "This is my first Symbol"

let symbol = Symbol("This is my first Symbol");
console.log(symbol);

// Arrow functions

/* function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
} */

const whereAmI = (username, location) => {
    if (username && location) {  // ????
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

console.log(whereAmI());