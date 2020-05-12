import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants.js';

const initialStateSearch = {
    searchField: ''
}


// first parantheses: inputs of function. using ES6, you can also give them default parameters so if it's empty, no error. 
export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) { //action.type is something we use in actions.js, we have action type being the var CHANGE_SEARCH_FIELD. switch is recommended over if statements because we can have multiple actions and it's easier to jsut add on with switch. 
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload}); // if this is the case, to return a new state. 3 principles in React: single source of truth i.e. initialState, state is read only i.e. we can never modify that object - the only thing we can do is to create a new object that is the same as before with whatever modifications we have, changes made using pure functions i.e. functions that get input, and return an outupt that doesn't have any side effects doesn't modify anything, every tiem we give an input gives the same output. based on these principles, reducer should be a pure function and return a enw state. we cannot do state.searchField and modify property, we are going to do Object.assign(). we are going to return a new state in object.assign, that is going to have everything in the state, plus the update of whatever new searchField property we have with action.payload. actions have 2 things we are sending: an object with type, and object with payload. we receive an object called change search field? if that's the case, then return a new state with action.payload, whatever the user has entered. 
        default: 
            return state; 
    }
}

// next lesson: to link Redux part of app to our React app. 

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}

