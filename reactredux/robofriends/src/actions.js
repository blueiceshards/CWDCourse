import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants.js';

// the action setSearchField is going to take text (which is what the user inputs) and it's going to return an object that has a type of 'CHANGE SERARCH FIELD', and it's goign to send (payload) whatever data is needed to go on to the reducer, which is just going to be w/e the user enters. we have just created our action. 

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD, // constants are usually capitalized in js. I like using an actual constant variable because with just a string, you can misspell something and you wont' get the error. but if you use a variable, you will get an error when running the app. most redux demo has a constant file as well which keeps track of all these actions. it's also nice to have a file where you can see what your actions are line by line, as most apps have more than one action. 
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING}); // We want to dispatch the pending action, so we dispatch an object that is of type REQUEST_ROBOTS_PENDING and there is no real payload. next, we have something async, we need a fetch call.
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
            .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}

// we have just created a higher order function in requestRobots. a function that returns a function. a thunk, because now requestRobots is going to return dispatch => {..}, it's goign to provide the dispatch function to the second layer function, so we can user it after the second set of arrows. 

// requestRobots has two functions. redux would not understand requestRobots out of the box because we are not returning an object as it expects for an action. wea re retrning a function, which does not mean anything to redux. by adding redux thunk, we are now listening to actions and anytime the requestRobots action gets triggered, it's goign to return a function and trigger redux thunk. redux thunk says, oh this is a function, I'm going to give you the dispatch so you can call some actions -> then, we can run our actions like after the second arrow. 

// we have created a system where actions are being triggered, and go throw a middleware. search term change -> it's going straight to the reducer,  update the store, and make changes to our view. if we requestrobots, it's going to notice it's a function, go into  the middleware, and redux thunk is going to say first just dispatch pending to the reducer, and i'll let you know when i'm done with the promise, and i'll let you know if I got any robots. and when it returns, it will dispatch the success, go through the reducer, update the store, adn make changes. this is pretty much the whole redux lbirary. 