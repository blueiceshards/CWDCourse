import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
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

export default App;

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