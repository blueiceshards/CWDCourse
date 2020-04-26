/* 

Javascript allows for actions to be performed on webpages. 

We can now, with Javascript, do the following: 
Change all the HTML elements in the page.
Change all the HTML attributes in the page.
Change all the CSS styles in the page.
Remove existing HTML elements and attributes.
Add new HTML elements and attributes. 
Javascript can react to all existing HTML events in the page. 
Javascript can create new HTML events in the page.

We can now do these changes when the user is on the page itself. 

HTML and CSS only loaded once at the beginning - if you want a different page, need to load a different HTML and CSS again.

Document object model:
https://www.w3schools.com/js/js_htmldom.asp

We need the dom to get, change, add, or delete HTML elements. 

e.g. document.write("hello") in chrome console.  [document is an object.] => Js allowed us to access the DOM through the document object. 

Each browser has javascript engines (chrome - v8 engines, firefox - spidermonkey, edge - chakracore) which reads js line by line and executes it. 

Now, we can use js to talk with the DOM. 

object "document" is the screen that we see in the browser. it is just an object. 

parent object of "document" is "window" type "window" in console. 

window.alert("check check") 
method

if we use a method like alert without window.alert, it assumes you're talking about the window. 

window.write("xx") doesn't work because write is a function of document but not of windows. 

a web browser has a window object with property document that specifies what gets displayed. the document object model reads the HTML and CSS, and JS is read by the js engine. if need to change anything, js can speak with the docuemnt object and modify HTML and CSS. 

DOM can be manipulated to make websites more interactive with JS. 

*/