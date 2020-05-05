import React, { Component } from 'react';  //Component - for destructuring
import './Hello.css';

class Hello extends Component {
    render() {   // must have render function that tells us what to return. 
        return (
            <div className ='f1 tc'>   
                <h1>Hello world</h1>
                <p>{this.props.greeting}</p>
            </div> 

        );  // mustt wrap return in brackets if you have multiple lines cos return is expecting only one output. 
    }
}

export default Hello; // means this file only exports one thing and this is Hello. 

/* You can do f1 tc after you import in the index.js file.  

Console log error: 

Warning: Invalid DOM property `class`. Did you mean `className`?
in div (at Hello.js:7)
in Hello (at src/index.js:10)
in StrictMode (at src/index.js:9)

what is className? Up till now, we have been writing html in a javascript file. due to JSX. part of react -> allows you to write HTML-like syntax in your JS. 1. doesnt this break separation of concerns? react has the ideaz of components. better to have functionality and style per components so that each component is in its own seaprate universe. separation of concerns -> components are concerned about themselves and nothing else. changes the paradigm here. we can look at hell ocomponent and know what it's doing. when i make a change, i just need to worry about the files that contain hello.css and hello.js 2. how are we even able to add html to js? JSX-> under the hood, reactt is letting us use html syntax but they are nto actually html tags. virtual dom, react creates its own object, looks at the dom, compares it and says hm I need to change this.. react uses JSX to create their virtual DOM that they build based on what we give it to them, then they look at virtual DOM and real DOM and say, this part has changed, I will change the real DOM based on the virtual DOM. react -> only chagnes what need to be done in the DOM. awkward at first, but as long as you wrap in brackets, you can write HTML and custom components such as Hello like you used in index.html. this is why we cannot use .class. Class is a reserved keyword in jaavascript. if this is JS, the fact that we are saying class here doesn't make sense -> would actually break in older versions of react. now it gives a nice error. bcos this is JS and not HTML, we need to use className. 

{this.props.greeting} is saying that this object, which is hello, has propoerties i.e. props that is greeting. (just syntax) but now we have access to whatever property and whatever property value we get from Hello (in index.js)

you can convert class Hello to a function. think of react as a function that accepts as input props (here props.greeting) that take parameters that are given by attributres and values thatt are being rendered.  these parameters are given by giving attributes ("greeting") and values ("Hello + react ninja") are just being rendered. if you have other props e.g. props.dog you can add this.props.dogs. 

*/