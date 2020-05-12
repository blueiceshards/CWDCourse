import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {  // returns an object
        searchField: state.searchRobots.searchField, // the part of the reducers is searchRobots. it's sayingthat the searchField that we are going to return, which is going to be used as props by the app component, is goign to come from the state.searchRobots.searchField which comes from our reducer. in index.js, we have created the store with searchRobots reducer.
        // now we have rootReducer which combines multiple fields, we need the searchRobots paramerter too. 
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error // see reducers file. 
    }
}
// right now, state only has one field and that is, searchfield. so we would have to do remove searchRobots from state.searchRobots.searchField for it to work. once we add more peice of state and more reducers, we need to get state from each piece we are interested in. 

// now, everything is going through redux, but it's still working. 

// most important part is the following requestRobotAction. something that replaces componentdidmount request. 
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots()) //return a function i.e. requsetRobots reducer. right now, we need the request robots action, and this request robots action needs a dispatch method to dispatch these actions. so app.js, we first need to import requestRobots from the actions file (together with setSearchField). and this requestRobots needs the dispatch method. now, and now, this dispatch requestrobots is going to work as long as we use redux thunk because it's goign to catch the fact that this is going to return a function. if we go back to our actions, we can now change from requestRobots = (dispatch) => {..} to requestRobots = () => (dispatch) => {..}
    }
}
// dispatch - what triggers the action. an action is just an object that we've created, but to send this action, we need to dispatch it into the reducer. so dispatch is used to send action.

class App extends React.Component {
/*     constructor() {
        super()
        this.state = {
            robots: [],
            //searchfield: '' //because redux replaces state in the app, we can technically remove searchfield from this.state from the app, and we can also remove onsearchchange (below), which is coming down as props we don't have to declare it as a method of app.
        }
    } 
    Don't need constructor anymore because no more state. robots are going to be returned as part of the props from onRequestRobots(). 
    */

    componentDidMount() {
        //console.log(this.props.store.getState()); //this.propos.store.getState() now has our empty searchfield ""
/*      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({ robots: users })
        }); */
        this.props.onRequestRobots()
    }

/*     onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    } */

    render() {
        // const { robots } = this.state; // delete {searchfield} because it's coming down as props instead
        const {searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (isPending) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} /> {/* no longer comes from this.onSearchChange which was a method of the app that has been since commented out, now it comes from the props. */}
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // connect is a higher order function (a function that returns another function) connect is going to run, and whatever connect does in side of this function, it's going to return another function. and because it returns another function, it's goign to run this part with the app. this is the syntax, have to get used to it. connect accepts 2 parameters, you can name them whatever you want, but htis is the standard. now we are saying, subscribe to any state changes in redux store. now app knows there is a redux store and anytime there's changes to it, it might be itnerested. but now, we need to tell it what to be intrested in. what state, dispatch, actions should I listen to. connect is goign to run the first part of the function, say I'm listening to this part of the state (map state to props) and i'm interested in these actions (map dispatch to props), and it's goign to give these props to the app. 

/*
you can only have one parent for return, so you need to wrap h1 and Cardlist in Div tag.
tc: text center
interactive apps -> SearchBox needs to interact with CardList. so that it can filter out robots accordingly. now, it's two children (with same parent App) needing to communicate with each other. in order to do this, React has something called state. up to now, we learnt about props which are properties that we keep passing down. but react only uses the props that it receives to render something. one way data flow -> really nice becuase the cardlist is a pure function. always receives input andr eturns the same output. deterministic, pure functions. these components are called pure/dumb components -> dunid to know anyting other than that they are pure functions tt receive smth and returns smth. props never change -> inputs we get, never modified.

but now, we need search to communicate with the cards and change accordingly. this is state. state means the description of your app. state -> an object tt describes your aplication. the state is the robot and whatever is entered in the searhbox. and state, is able to chagne. (able to change vlue of searchbox and inputs, and what robots get displayed)

this is a rule you have to remember. props are simply things that come out of state. parents  feeds state to a child component and once child receives the state, it is a property. it cannot change the propoerty. the parent tells child the state, and the child receives it as {robots} property.

now let's create a const State.

to use state, we need to create a class.

advanced objects class, need to use super to call the constructor of component.

state can change and affect our app. it lives in the parent component. parent passes state to different componenets. now, access robots (Cardlies robots={}) not from {robots}, but from {this.state.robots}.

now, CardList.js accepts robots as props even though in the App.js it's state. because App owns state that includes robots, it is allowed to change it. to communicate, in searchbox, we have onSearchChange (function we make up)

must use arrows for new methods/functions we create.

ust use this.setState to change state don't do this.state.searchfield = ... you must use this.setState.

now, we need to assign filteredrobots. how? for render, we need to pass filteredRobots instead of this.state.robots.

move const filtered robots from onSearchChange function to render function.

https://jsonplaceholder.typicode.com/users -> generate sample API (web request info from an online database)

App.js is smart. it has state - piece of data tt describes app - smart cmponent. it's not just a pure fucntion. smart functions tend to have class syntax. in real life, when we start off this app, this robots will actually be an empty array -> nothing there, haven't grabbed users.

react components come with some other things we can use => lifecycle methods. methods that we can use that comes with react. they are called lifecycle hooks because if we run these, it will auto trigger when this app gets loaded on the webiste. 3 steps -> mounting, updating, and unmounting.

the way react works is that we do sometith
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

index.js file -> our webpage is nothing but a Div with an ID of root. when we say we mount a component, we are replacing this and adding our entire app. mounting is the start of the app.

then, will check one by one for (https://reactjs.org/docs/react-component.html):and do those in order if these stuffs are available.

*Mounting*
constructor()
static getDerivedStateFromProps()
render()
componentDidMount()

*Updating* when stuff gets re-rendered e.g. when you type into the search bar. updates are caused by changes to props or state. the functionr eceives new ifnfo.
static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

*Unmounting*
This method is called when a component is being removed from the DOM:
componentWillUnmount()

these are called lifecycle hooks because the get run wheenver your app does something.  it comes with react. you can just put them into your class component and they will autmatically get triggered - dont have to worry about calling these methods.

because componentdidmount is a react code, no need to use arrow functions.

updated state in componentdidmount => in lifecycle under updating, will run render again. goes from an empty array to a robots list, render gets rerun, virtual DOM notices a difference and repaints our webbrowser to robots.

now, we can remove our robots file (to simulate real life) and get our database from https://jsonplaceholder.typicode.com/users instead.

1. fetch database from url,
2. we get a reponse with some json magic,
3. we get the users and update the users with setState. (you can replace "users" with any other word like "hello")


fetch is a method on the window ojbect , on all browsers, tt allows you to make requests to servers. this is a server that returns a list of users that we can use.

react is good at creating reusable components that can also have functionality. e.g. Scroll component around cardlist that wraps cardlist. now, anyitime i need scrolling in my app, I can just wrap wtih scroll.

if (!robots.length) {

if robots.length =0, will be false
so put exclamation mark
if robotslengthnot=0, will be true. if no robots, we are loading.

render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }


npm run build => creates a build folder which can be deploywed anywhere and is minified and babeled for you.

You want to add error boundaries so that if there's an error, maybe display an error message but the entire website doesn't break for a better user experience.

Components -> newfile -> ErrorBoundary.js.
*/