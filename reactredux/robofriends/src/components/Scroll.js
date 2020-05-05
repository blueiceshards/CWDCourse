import React from 'react';
const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}

        </div>
    );
};

export default Scroll;

/* 
but scroll is not a self closing component. it wraps stuff. so how to tell scroll to render whatever is inside of it??
there are 3 things in react: props, state, children.
scroll can use children as a way to render its children. children -> Cardlist robots. 
import React from 'react';
const Scroll = (props) => {
    return props.children
};

export default Scroll;
=> returns the cardlist because the children of Scroll is actually cardlist. 

to add styles, you can add Scroll.css, or you can add style inline. use double curly {{}} within the first set of curly, is a javascript expression, and within this, I am returning an object. in this object, can have CSS styles, e.g. overflowY which is a CSS property (css: overflow-y) -> you must use camelcase for JSX. 

you now have a scroollable component due to overflowY. 

the entire app is described with robots, and searchfield. react takes care of all the rest. as soon as searchfield or robots changes, react trickles down all these information as props to all these components and magically creates our view for us. -> react is so powerful cos it's a view layer, which takes care of manipulating the DOM, and all we need it to do is to tell what is the state, and what functios you wanna run with the states. 

it's a good app and these compnoents are fully reusable -> we can use searchbar and scroll for other parts of the website too -> this is why react is so powerful. once you learn syntax, react becomes very poweful. 

folder structure is very important for oragnisation -> our src folder is quite messy now and this is jsut a small app. 

components: cardlist, searchbox, scroll
containers: smart components, containing components that have state, lifecycles, and class. not pure functions because they're not pure and have stte that modify within these fucntions. hard to have pure because we need to make requests to the outside world. these containers are special becaus ethey contain thing sand just pass down state to the components. 
 
*/