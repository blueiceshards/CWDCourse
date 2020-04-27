/* Events reference 
https://developer.mozilla.org/en-US/docs/Web/Events

Important,common: mouse events, keyboard events

Javascript char codes (key codes)
https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*/

// var button = document.getElementByTagName("button"); returns an array so to access the button you need to var button = document.getElementByTagName("button")[0] to get the first item in the array.

/* var button = document.getElementsByTagName("button")[0];
button.addEventListener("mouseenter", function() {  //click, mouseleave
    console.log("CLICK!!!");
})
 */

/* var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
 */

/* button.addEventListener("click", function() {
    if (input.value.length > 0) {
        var li = document.createElement("li"); // we can create an element, li in this case. if we want to display something, it needs to have a text inside. 
        li.appendChild(document.createTextNode(input.value)); // according to DOM, to create a text, we need to createTextNode and put the text inside of it. input.value gets the value from the var input (see var input above).
        ul.appendChild(li); // now, we have created the li but we need to attach it to something that is part of the actual view. in this case, the unordered list, and we use appendChild, which adds it as a child. these 3 are useful - practice and remember them. 
        input.value = "";
    } 
})


input.addEventListener("keypress", function(event) {
     if (input.value.length > 0 && event.keyCode === 13) { //event.which works as well
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode(input.value)); 
        ul.appendChild(li); 
        input.value = "";
    }  
}) */

// Refactoring code because do not repeat yourself -> makes code look better.

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) { 
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

/* Note: Callback functions

In the previous video you saw something interesting:

Event listener syntax : 

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
You didn't see the function being called like this as you may have expected: 

button.addEventListener("click", addListAfterClick());
input.addEventListener("keypress", addListAfterKeypress(event));

This is something called a callback function. When that line of javascript runs, we don't want the addListAfterClick function to run because we are just adding the event listener now to wait for click or keypress. We want to let it know though that we want this action to happen when a click happens. So the function now automatically gets run (gets added the ()) every time the click happens. So we are passing a reference to the function without running it. */