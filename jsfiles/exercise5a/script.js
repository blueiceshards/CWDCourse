/* 4 + 3; */

/* if (4 + 3 === 7) {
    alert("You're smart!");
    console.log("Hello!");
} */

/* console.log("Hello!");
console.log("Hello!");
console.log("Hello!");
console.log("Hello!");
console.log("Hello!");
console.log("Hello!", "How are you?"); */

/* You need to call the function by putting (); for example, alert(). */

function sayHello() {
    console.log("Hello");
}

sayHello();

var sayBye = function() {   /* Anonymous Function doesn't have a name - cannot access this function. you could name it by var sayBye = function byebye() {...}  */
    console.log("Bye");
}

sayBye();

/* Inefficient: */
/* function sing() {
    console.log("AAAAH");
    console.log("DEEEE");
}

sing(); */

/* Efficient:  */
function sing(song) {
    console.log(song);
}
sing("AAAAAH");
sing("DEEEE");
sing("DAAAAA");

function multiply (a, b) {
    return a * b;
    return a;
}
/* Return is the final way to end the function; after that it exits the function. */
console.log(multiply (5, 10));

function multiplylazy (a, b) {
    if (a > 10 || b > 10) {
        return "That's too hard.";
    }
    else {
        return a * b;
    }
}
/* You can have multiple returns if you have mutually exclusive if statements.  */

/* Functions are variables. (gives one output)
e.g. var a = function (a,b) */

/* paramenters vs arguments
parameters -> (a,b), e.g. multiply has two parameters, a and b. 
arguments -> inputs to (a, b), e.g. (4, 5) functions get called with arguments.

Functions are the core of javascript. 
*/