// scope
/* 
scope refers to variable access - what variables do I have access to when a code is running?

by default, in JS, you are in the root scope (i.e. window object)

function aa() {
    console.log("test");
}

function aa is part of the window scope. 

window.aa()

window
-> aa function is added to window scope. 

this is the root scope (parent scope). 

function bb() {
    var a = "hello";
}

clg(a) does not work because a only lives within the function bb. the only way to do clg a is within the function, i.e.

function bb() {
    var a = "hello";
    console.log(a);
}

now if you run bb(), you get "hello"

functions have access to any variable in the root scope.

var b = "can I access this?"
function bb() {
    var a = "hello";
    console.log(b);
}

function bb has access to variable b. this is because window.bb exists, and the variable b lives on the window object. they both have the same parent. 

let's say now, you do:
var b = "Can I access this?";
function bb() {
    b ="hello";
}

you run bb() in the console

now, console.log(b) gives "hello". because b is the same variable.

*/

// Root scope (window)

var fun = 5;

function funFunction() {
    // child scope
    var fun = "helloooo";
    console.log(1, fun);
}

function funerFunction() {
    // child scope
    var fun = "Byeee";
    console.log(2, fun);
}

function funestFunction() {
    // child scope 
    fun = "AAAAAH";
    console.log(3, fun);
}

console.log("window", fun);

funFunction();
funerFunction();
funestFunction();

console.log(fun); // becomes AAAAH because funest overwrites funer and fun because it's the latest. we will no longer have access to the root scope. naming conflict. we name the same thing as the same function in the root scope; we lose access to it. 

/* when you run a function, first look at child scope, then look at root scope (outside function). but if doesn't exist in child or root scopes, then we get an error. the last check is the root scope - the window object. if not we get an error -> your varible does not exist. */
