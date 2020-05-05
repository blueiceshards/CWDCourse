/* 
Asynch await is part of ES8 and is built on top of promises. underneath the hood, an asynch function is a function that returns a promise. but the benefit of asynch await is that it makes code easier to read. e.g. 
*/

// Promise 
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

// Async await - makes code easier to read
async function playerStart() {
    const firstMove = await movePlayer(100, 'Left'); // pause
    const second = await movePlayer(400, 'Left'); // pause
    await movePlayer(10, 'Right'); // pause
    await movePlayer(330, 'Left'); // pause
}

/* 
The goal with async await is to make a code that is asynchronous look synchronous. a Promise in javascript is like an IOU -> I promise to return something to you in the future -> takes time, but lets it run in the background. 

async await code are jsut promises under the hood. syntactic sugar -> does the asme thing, but with different syntax to make it look prettier. promises have .then() that you keep having to chain. async on the other hand, has async word in fromt of us, and some await keywords. 

async -> first declare it's an async function. now, we can do whatever we want in this function, but in addition, we have the additional await keyword because we declared it an async function. this await keyword says, pause this function until we have something for you - we are awaiting the response. you can use the await keyword in front of any promise that returns a keyword, which moveplayer does. once the promise is resolved, then the function moves to the next line and awaits the next move (and the next move and so on). instead of chaining, we can actually assign variables to each of the steps. it looks very synchronous. 
*/

// Real world - fetch function. 
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

// To make cleaner, use async await. btw, await fetch means function pauses until we get a response from fetch. 
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
}
// then, run fetchUsers() in the chrome console to get the data. async await is a lot easier to understand. 

const urls = [
    'https://jsonplaceholde.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
)).then(results => {
    console.log('users', results[0])
    console.log('posts', results[1])
    console.log('albums', results[2])
}).catch(() => console.log('error'))  // or catch('oops');

// Convert to async await. [ users, posts, albums ] is from ES6 destructuring.
const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (err) {
        console.log('oops', err);
    }
}

// Async await to catch -> must use try-catch blocks. (not great but you get used to it). also, your catch must receive an error parameter. use promises or async await dependign on whatever you or your team feels more comfortable with.


