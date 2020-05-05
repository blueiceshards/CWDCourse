const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked');
    } else {
        reject('Error, it broke')
    }
})

// promise.then(result => console.log(result));

/* promise
.then(result => result + '!')
.then(result2 => {
    console.log(result2);
})    */
// this is called chaining promises

/* promise
.then(result => result + '!')
.then(result2 => {
    throw Error
    console.log(result2);
})
.catch(() => console.log('Error!')); */ // clgs Error!


/* promise
.then(result => {
    throw Error
    return result + '!'
})
.then(result2 => {
    console.log(result2);
})
.catch(() => console.log('Error!'));    */ // still clgs Error!

// catch catches any error that may happen between the chains .then. 


promise 
.then(result => result + '!')
.then(result2 => result2 + '?')
.catch(() => console.log('error'))
.then(result3 => {
    //throw Error;
    console.log(result3 + '!');
})

// where you put the catch statement, it'll check and run if anything before it has an error. 
/* 
A promise has a resolve and a reject. so far, we have only resolved (have never rejected). the promise, we can give it to a variable, and run it asynchronously when we run .then and do the results and do whatever we want with it. we can keep chaining it and check for errors.

A promise is something you have now that you can use around your code even though you don't have the value justyet. we can assign it to a variable to a const promise. when is this a goodthing? promises are great for asynchronous programming. when you don't want JS to block the execution of your code, like making API calls, grabbing data from a database, or getting an image, you use promise so that the task happens in the background. when the promise gets resolved or rejeected, then you get the response. 

*/

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hiiii')
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Pookie')
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Is it me you\'re looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
.then(values => {
    console.log(values);
})

/* 
Even though promise2 and promise took a lot shorter, because you had promise4, it waited 5 seconds before returning everything at once. 

But if you already run the variables promise-promise4 in your chrome browser, Promise.all will be instant because we have already run those promises and assigned them to variables, and between the time that we copied and pasted, these promises in the background have already been resolved. 
*/

// Final real world example:
/* 
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))

NOTE: must use in chrome. fetch doesn't work in javascript because it's a windows object. it, however, works with react because react will help you manage all the windows stuff underneath the hood.

the fetch simply returns a promise, a promise<pending>. by adding a .then, we are answering to whatever the promise returns with, whether it is resolve or reject, and we get to manipulate the data. 

promises are a bit like event listeners, except that they can only succeed or fail once (not twice). this is extremely useful for asynchronous success and failures, such as API calls. we are less interested in the exact time something became available, we are more interested in reacting to the outcome i.e. reacting to somethign that happens asynchronously. 

a promise is an object that may produce a single value some time in the future, either a resolved value or rejected, with a reason that it is not resolved (rejected). a promise can be one of 3 possible states: 1. fulfilled (resolved), 2. rejected, or 3. pending. 

*/