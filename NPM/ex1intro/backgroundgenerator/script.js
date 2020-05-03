var _ = require('lodash');
console.log(_);
var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");  // class selectors, just like we do in CSS.
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("buttonNew");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// just need to get used to syntax "linear-gradient(to right, "

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Second function (setGradient) immediately gets run with the event "input" so you don't need to setGradient(). We want setGradient to be called every time the input is selected, so we cannot do setGradient() which runs once when the javascript engine reads the script.js. 

/* color1.addEventListener("input", function(){
    console.log(color1.value);
})

color2.addEventListener("input", function(){
    console.log(color2.value);
}) */

/* Bad: 
color1.addEventListener("input", function(){
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
})

color2.addEventListener("input", function(){
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
}) 

React will simplify everything above.*/


button.addEventListener("click", setBackground);

function setBackground(){
    randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
    randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
    color1.value = randomColor1;
    color2.value = randomColor2;
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
