// Do these codes in console.
/* 

document.getElementsByTagName
document.getElementsByClassName
document.getElementById

document.getElementsByClassName("second")[0] yields "No Excuses"

querySelector selects first item it finds.
document.querySelector("h1");
document.querySelector("li"); 

document.querySelectorAll("li"); displays all 6 list elements. 
you can also do document.querySelectorAll("li, h1");

querySelector is more powerful than getElements.

document.getAttribute -> you need to select an element before you can get its attribute. e.g. documentquerySelector("li").getAttribute("random");

you can use getAttribute for width and height of an image also.

document.querySelector("li").setAttribute("random", "1000");
document.querySelector("li"); --> yields <li random="1000">Notebook</li> instead of "23".

document.querySelector("h1").style.background = "yellow";
BUT, separation of concerns -> you don't want styles in your HTML (which focuses on text), styles should be in CSS, and actions should be in JS. 

instead, you should do the following:
var h1 = document.querySelector("h1");
h1; --> will yield <h1>shopping list</h1>
h1.className = "coolTitle";
and your stylesheet will have a class called coolTitle with the styles you want. 

document.querySelector("li").classList;
document.querySelector("li").classList.add("coolTitle");
document.querySelector("li").classList.remove("coolTitle");
document.querySelector("li").classList.add("done");
document.querySelector("li").classList.toggle("done");

innerHTML // dangerous
document.querySelector("h1").innerHTML = "<strong>!!!!!</strong>";

document.querySelectorAll("li")[1]; ---> yields Jello
document.querySelectorAll("li")[1].parentElement;  ---> yields ul
document.querySelectorAll("li")[1].parentElement.parentElement --> yields body
document.querySelectorAll("li")[1].parentElement.parentElement.children

important to cache selectors in variables -> if not web browsers will have to keep running.

so, do:

var h1 = document.querySelector("h1");
*/