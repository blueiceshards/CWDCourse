import React from 'react';      // react has webpack underneath the hood that does the bundling for us. react is a view library core of the package tt does DOM manip for us. but react can be used for mobile, VR, and react DOM is used for the DOM website, but we could have smth like react Native etc for mobile. 
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // use these methods to connect our redux stuff with react stuff. connect function is optimized so that we can avoid using store.subscribe. => subscribes any component that we are intersted to be aware of redux and register any changes. but this is tedious. connect simplifies this process by using the connect function, we are making the component redux-aware. The connect component are the components that know about redux. we have to say which ones of these react components are smart or aware that the redux library exists and are subscribed to changes. btw, smart components are containers. 
import { createStore, applyMiddleware, combineReducers } from 'redux';
// combineReducers combines all reducers to a root reducer. 
import thunkMiddleware from 'redux-thunk';
import './index.css';      // new syntax. react allows us to add css not just in one file, but for each different component. app.js -> you have app.css that describes the app. index.js -> we have index.css tt has its own styles, and only applies to whatever index.js renders. the way we use it dot slash -> same directory. 
// no .js because it assumes it'll be a .js if it doesn't have suffixes. Also, all components must be capitalized. 
import App from './containers/App';
import * as serviceWorker from './serviceWorker';   // allows apps to work faster & potentially offline. 
import 'tachyons'; // import after checking it's in your json file. 
import { searchRobots, requestRobots } from './reducers';
// because robots.js file is using export instead of export default, this file could have multiple exports (just so happens this file only has one.) but for card, is default, can just do import Card. if not dfault, must destructure, so if you have another export like cats, you can say { robots, cats }
import {createLogger} from 'redux-logger';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });

//now, we need to create our store - the single source of truth that describes the state of our app. we will end up having many many reducers in reducers.js. in the store, we want to combine all of these reducers to create one root reducer, which we will do later on. i.e. createStore(rootReducer) but for now, as we only have the searchRobots reducer, we will use that to create the store. 
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); // add thunkMiddleware toapplyMiddleware 

// index file: we need to pass down our store to the app. we don't really want to pass down the store all the way down the component tree to our smaller components over and over again. react-redux gives us a nice component that we can use to do this really easily. we can wrap our app compnent in this provider component. now, instead of passing down store to the app, we can just include it into the provider component, which is goign to take care of passing down the store to all the components down the component tree from the app. we use something called connect to finish this connection. we have created the provider compnoent which passes down the store, and the store uses the rootReducer (in our case searchRobots) to create the store and the object tree of the state. in the next video, use the other part of react-redux to connect everything together. 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider> 
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

