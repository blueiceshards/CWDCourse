// Type coercion

console.log(1 == '1'); // true. type coercion means that when the operands, i.e. things to the left and right of the oepratior, are of different types (i.e. number and string types), one of them will be converted to an equivalent value by the JS engine. the JS engine is going to say string 1, I think you mean the number 1. 

// type coercion: the language converting a certain type to another type. 

// Do all language have type coercion? => Yes, because we always need to convert types between programmes to do things. in memory, different types look completely different than what we type. the number file in actual physical memoryh in computer is represented in 1s and 0s. JS has an especially heavy type conversion nature because it is dynamically typed. 

// In JS, type coercion happens when you use the double equal. double equal means compare the two values, if they have different types, try to coerce one into the same type. triple equal in JS means compare two values, don't try to coerce the values, be explicit in your comparison and do exactly what I tell you.

// should we ever use == instead of ===? (course instructor says no, although some people argue it has interesting applications, because it's not predictable code.)

if (1) {
    console.log(5); // true because JS coerces 1 to = true
}

if (0) {
    console.log(6); // false because JS takes it as a boolean (false)
}

console.log(-0 === +0); // true, but they are technically different things in JS. 

console.log(Object.is(-0,+0)); // false

console.log(NaN === NaN); // false 

console.log(Object.is(NaN, NaN)); // true

// Object.is works same for === except for +0 and -0, and NaN (not a number). 

// main takeaway, use === because type coercion in JS can be really tricky. 

// Type Coercion
// https://dorey.github.io/JavaScript-Equality-Table/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3

// Array Explorer
// https://sdras.github.io/array-explorer/

// Object Explorer
// https://sdras.github.io/object-explorer/





