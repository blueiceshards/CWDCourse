const express = require('express');

const app = express(); 
app.use(express.static(__dirname + '/public')) // will print out node then public. 

//network > localhost > response > will yield the HTML file. if I had css link, it would load the CSS in my public folder, if I had JS file, it will load it cos within the body of HTML we can add a script tag. and this is a server that serves simple, static functions, if we want an API where we interact with the server like GET, POST, PUT, DELETE, then that's when we start using our methods that we learnt previously. now that we have this basic foundation, we will build our server for our app. 


app.listen(3000);





/* 3 lines to get a server running:
const express = require('express');

const app = express(); 

app.listen(3000);

local host: cannot get because we are not doing anything. 

Express has g reat guide to getting started and a ton of info & documentation. 

Express takes away a lot of repretition and makes things easier.

URL that does not exist => 404 not found. 

app.get, app.delete, app.post, app.listen => simple method of saying, if you go to this route, do this, if you go to this route, do this. everything is logical and trickles down. 

const app = express(); 

app.get('/root', (req, res) => {
    res.send('getting root'); 
})

app.get('/profile', (req, res) => {
    res.send('getting profile'); 
})

app.get('/', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user); // immediately returns an application/json content type with a response that is json. 
})

app.listen(3000);


Important concept in express: middleware. app.use() is  a generic express middleware => as the request is coming in, will pass through the use function then trickle down to whatever we get, post, put delete. this middleware will do something to the request we just had, in order to perhaps make it easier to work with later. many cases why middleware is important. people write great middleware script to include. middlewares receives ahead of time, before it gets to the routes, the request, modifies it, and passes the next function to keep it going. 

app.use((req, res, next) => {
    console.log('<h1>hello</h1>');
    next(); //needs to call next() to reaches the next segment of the code below. for middleware to keep passing data through it needs to call next() i.e. third parameter. app.use, get the request of the website => request comes through -> we do whatever we want with it, in our case, we clg hello, then, we have next() and express keeps running through the bottom stuff e.g. send 'test'. 
})

app.get('/', (req,res) => {
    res.send('test');
})

//Postman is a great way to test your server before you connect it to the front end.// 

HTML form data: x-www-form-urlencoded (in postman)
JSON: raw text>JSON

const express = require('express');

const app = express(); 

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req,res) => {
    res.send('getting root');
})

app.get('/profile', (req, res) => {
    res.send('getting profile');
})

app.post('/profile', (req,res) => {
    console.log(req.body); // need to use a middleware npm install body-parser
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send('success'); //simulate adding "jenny, tennis" to our database which our server has received from the fake postman post request. we can also use postman to simulate put (updating) or delete (delete user) we will get into next user.
})

app.listen(3000);



//RESTful API//

a REST API defines a set of functions which developers can perform requests and receive responses via HTTP protocol such as GET, POST, PUT DELETE. a web browser sends a request and hopes that the server returns what the browser asks for. but google server can send out whatever it wants - it does not have to follow the rules that the we browser sent. with RESTful API, we can create an API that is RESTful, something that follows the rules, that everyone can agree on so that we have compatibility between different systems. RESTful API is an architectural style and it's an approach to communication - agreedupon set of rules so everyone plays nicely. a RESTful API receives GET to receive a resource, PUT to change the state, or update, a resource, POST that creates a resource, and a DELETE that removes it. RESTful API is a way to define our server so that it specifies what it can provide and how to use it. i.e. the URL parameters should make sense. 

e.g. /profile, we expect that GET request yields a profile, POST request add apropfile, PUT request updates profile, think of /profile as the noun of what we want to receive. the HTTP requst is the verb and everything after the slash is the noun. 

REST APIs are something called stables. calls can be made independelty of one another, and each call contains all the data necesasry to complete itself successfully. a server doesn't need to keep memorizing things -> each request that comes in has enough information that the server can respond with, regardless of who that person is. 

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/:id', (req,res) => {
    // req.query // what we get when we do a get query string. e.g. localhost:3000/?name=andrei&age=31 then console.log(req.query) yields { name: 'andrei', age: '31' } in terminal.
    //req.body // using something like urlencoded or json as a middleware, we can receive whatever the request sends in the body.
    // req.headers  // console.log returns all headers including the GET request your postman sends.
    // req.params // yields the parameters of the URL. e.g. app.get('/id') you get params of the ID. e.g. localhost:3000/1234, console.log(req.params) yields { id: '1234' }. you can have as many parameters as you want and you can nest them. but we have access to our request information which is fantastic. 
    res.status(404).send('not found'); // when we send a response, we also want to have some options of what we want to send. with a response, we can say that with sending, we want to respond with a status of  (404). postman will return not found in the body, with a status of 404. 
});

*/
