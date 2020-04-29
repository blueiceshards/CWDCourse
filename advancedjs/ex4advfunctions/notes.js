// Advanced functions

// Old HTML

/* function first() {
    var greet = "Hi";
    function second() {
        alert(greet);
    }
    return second; 
}

var newFunc = first();
newFunc(); */

// ES6 code

const first = () => {
    const greet = "Hi";
    const second = () => {
        console.log(greet); // child scope has access to parent scope i.e. "greet"
    }
    return second;
}

const newFunc = first();
newFunc(); // "Hi" even though first() is never going to be run again, the only thing we ahve is the second() function, web browser remembers "greet"



// We also learnt about scope. An important property of functions is that the variables created inside of them, including their parameters, are local to the function.

// Every time you run the first() function, this blob of code (below first) gets executed and the greet variable gets created every time -> good for us because helps prevents accidental interferences between functions. if all variables were shared by the whole programme, it could take a lot of effort to make usre that no name is ever used for two different purposes. Separate scope -> can use greet without checking the entire codelist. 

// local variables that only exist within functions -> makes it possible for us to understand functions as small universes where whatever happens in taht universe only matters to itself.

// Javascript important concept -> closures. Function runs, function is executed, function is never going to execute ggain. e.g. first() function is only executed once, and then  the resultw e put into newFunct(). going to remember references to those variables alive in teh memory first(). However, when we load up this prog, the JS prog runs first(), second needs to remmber what greet is. 

// Closures - a function ran, the function executed, it's never gonna execute again, but it's going to remember that there are references to those variables so the child scope always has access to the parent scope. Children always have access to their parent scope. but parent scope don't have access to their children.

// Currying - the process of converting a function that takes multiple arguments into a function that takes them one at a time.

const multiply = (a, b) => a * b; 
const curriedMultiply = (a) => (b) => a * b; // function that accepts a parameter(a=3), then once it calls that function, it returns another function that accepts (b=4) and that function multiplies a=3 and b=4. 

console.log(multiply(3,4));
console.log(curriedMultiply(3)(4));

// Why curry? It's more extensible. for instance, every time we want to multiply a number by 5, we can:

const multiplyBy5 = curriedMultiply(5);

console.log(multiplyBy5(10));


// Compose - putting 2 functions together to form a third function where the output of one function is the input of the other. 

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

console.log(compose(sum,sum)(5));

// Most important thing as a web developer -> 
// Avoiding side effects, functional purity.

// side effects -> any actions that happen inside the function that we don't know anything about. e.g. writes to external variables or console.logs. 

var a = 1
function b() {
    a = 2 // bad because the function is starting to affect the "outside world" we must avoid these side effects and establish functional purity
}

// we always want "return" a value from a function. this causes all functions to be deterministic, i.e. the input, whatever we put into the parameters, whether it is empty or has certain parameters, even if we do the functions 1000 times it always have the same return value.

// Although in real life, there may have side effects, as a good developer, you should always avoid side effects and have functional purity and determinism. 