import React from 'react';      // react has webpack underneath the hood that does the bundling for us. react is a view library core of the package tt does DOM manip for us. but react can be used for mobile, VR, and react DOM is used for the DOM website, but we could have smth like react Native etc for mobile. 
import ReactDOM from 'react-dom';
import './index.css';      // new syntax. react allows us to add css not just in one file, but for each different component. app.js -> you have app.css that describes the app. index.js -> we have index.css tt has its own styles, and only applies to whatever index.js renders. the way we use it dot slash -> same directory. 
// no .js because it assumes it'll be a .js if it doesn't have suffixes. Also, all components must be capitalized. 
import App from './containers/App';
import * as serviceWorker from './serviceWorker';   // allows apps to work faster & potentially offline. 
import 'tachyons'; // import after checking it's in your json file. 
// because robots.js file is using export instead of export default, this file could have multiple exports (just so happens this file only has one.) but for card, is default, can just do import Card. if not dfault, must destructure, so if you have another export like cats, you can say { robots, cats }


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// i want react dom pacakge to use the function render and render whatever this is. before, we had <App </> that is not a .js file. 

// greeting is a prop (propoerty). useless concat -> why are you doing this when you can just add them alltogether (but can ignore for now). how we have a greeting propo to hello, we now have access in hello.js to props. (lets go to Hello.js)
// instead of <Card /> it was <Hello greeting={'Hello' + 'React Ninja'}/> 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
if we have 100s of card ids, that would be like a lot of copy and pasting -> not efficient. also, diagram of one way data flow -> need to have parents and children.
should have one big app componentt with diff children -> each component small and reusable.
so, let's have a CardList component which is a parent of Card -> we can just render that instead of all these cards i.e.
ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

robots = {robots} array.

now, we want to have the title and interactive searchbox.
also, instead of import CardList from './CardList', we should replace with App, which will be the father of all our children.

*/

