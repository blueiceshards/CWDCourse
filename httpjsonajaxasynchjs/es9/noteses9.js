// ES9 is the 2018 version of ECMAScript with new features. 
// Object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

//const { tiger, ...rest} = animals;

//console.log(tiger);   // 23
//console.log(rest);    // { lion: 5, monkey: 2 }

function objectSpread(p1, p2, p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

const { tiger, lion, ...rest } = animals;
objectSpread(tiger, lion, rest);

// react is using objectspread operator by default because it was so useful, but since 2018, objectspreadoperator has also officially become a part of JS. 

// finally

/* when everything is done in a promise, it will run this regardless of whether the promise resolved or rejected. finally -> undefined as it does not receive any parameters from the promise. Error -> skip to catch block and also run the finally. 

Syntax: .finally(() => console.log('extra'));

Good when you have to run a piece of code no matter what. 
*/

// for await of -> allows for iterating over awaits

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(async function (url) { //no arrow
            const response = await fetch(url);
            return response.json();
        }));

        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (err) {
        console.log('ooooops', err);
    }
}

// loop -refresher

const loopThroughUrls = url => {
    for (url of urls) {
        console.log(url);
    }
}
console.log(loopThroughUrls());

const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url)); //creates an array of fetch promises of each one of these requests. 
    for await (let request of arrayOfPromises) {
        const data = await request.json(); //we used await keyword in fron tof a promise (we are using the await keyword for awayt (let..) because we are loopoing over arrayofpromises) because we are looping over promiess, and we need await request.json() which again is a promise that receives our data. 
        console.log(data);
    }
}

// for await lets us loop over multiple promises almost as if we are writing synchronous code. forawaitof -> takes each item from an array of promises that returns to us in the correct order, all the responses. 

// JS new features https://github.com/daumann/ECMAScript-new-features-list
