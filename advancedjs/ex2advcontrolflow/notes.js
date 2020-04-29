// Javascript Conditionals

/* 
if
else 
else if
*ternary operator*
*switch*

// Ternary Operator
syntax:
condition ? expr1: expr2;
(is condition true or false? if true, provide this value expr1. else, provide value expr2.)

*/

function isUserValid(bool) {
    return bool;
}

console.log(isUserValid(true));

var answer = isUserValid(true) ? "You may enter" : "Access denied" //changes when you change input to isUserValid

console.log(answer); // "You may enter" because input to isUserValid is true
console.log(answer2); // "Access denied" because input to isUserValid is false.

var automatedAnswer = "Your account # is " + (isUserValid(true) ? "1234" : "not available");

console.log(automatedAnswer); // changes when you change input to isUserValid

function condition() {
    if (isUserValid(true)) { //returns true by definition because input = true = output
        return "You may enter";
    } else {
        return "Access denied";
    }
}

var answer2 = condition();
console.log(answer2);

// Switch statement - great when you have lots of conditions, instead of using many else ifs, else, statements. it reads nicely. createvariable whathappens, then check with the variable is, in the case when the direction is forward, do this, default, if none of these conditions work, return please enter a valid direction, and return whatHappens so that function returns something.  break means break out of the switch statement. the programme stops here, goes out of the switch statement, to return whatHappens. if you break before you assign whatHappens to a string(in this case), then it will return undefined because whatHappens variable has only been declared but not assigned. 

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward": //if direction = forward
            whatHappens = "You encounter a monster";
            break;
        case "back": 
            whatHappens = "You arrived home";
            break;
        case "right": 
            whatHappens = "You found a river";
            break;
        case "left": 
            whatHappens = "You run into a troll";
            break;
        default: 
            whatHappens = "Please enter a valid direction";
            break;
    }
    return whatHappens;
}

console.log(moveCommand("right"));

// in chrome console: window.moveCommand("forward"); moveCommand now exists in the root scope, which is window.

