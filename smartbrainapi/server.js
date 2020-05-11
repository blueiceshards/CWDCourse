const express = require('express');
// const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors'); // chrome doesn't trust thatt our server is secure. we could be a hacker that is making a request. we need to do something called 'cors' it's a middleware that lets us link our front end to our back end. 
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'maria',
        password: 'password',
        database: 'smart-brain'
    }
});

/* db.select('*').from('users').then(data => {
    console.log(data);
});  */

const app = express();

app.use(express.json());
// app.use(bodyParser.json());
app.use(cors());

/* app.get('/', (req, res) => {
    res.send(database.users);
}) */

app.post('/signin', (req, res) => {signin.handleSignin(req,res,db,bcrypt)})

app.post('/register', (req, res) => {register.handleRegister(req,res,db,bcrypt)})

app.get('/profile/:id', (req, res) => {profile.handleProfileGet(req,res,db)})

app.put('/image', (req,res) => {image.handleImage(req,res,db)})

app.post('/imageurl', (req,res) => {image.handleApiCall(req,res)})

app.listen(3001, () => {
    console.log('App is running on port 3001'); // second parameter: function that runs after the listen
});

/*
As you develop, you need to have an idea of what your API design will look like, before you even start coding.

/ (root) ==> this is working
/signin ==> POST request (posting  user info data) respond with either success or fail. anytime we send a password, we want to send in body, over HTTPS, not as a query, so hidden from man in the middle and is secure.
/register ==> POST request want to add new data into our server with user information. should return the new created user. new user object.
/profile/:userId ==> profile with optional parameter of userID i.e. user home screen; most likely a GET request to get the user information, and return us the user.
/image ==> PUT want to update the user profile , returns the updated user object with the number of image requsests he got.
next videos: create these endpoints and test them with postman to make sure that they are working.

when we build a backend for our website, we now have the ability to interact with our website. we can include a database with memory and track actual users etc. for now, we work with node and express to create urls and endpoints (e.g. root, /signin, /register) and provide a response to the front end.

Now, we will work on the server and once everything is done, we will deal with linking to frontt end.

Security is very important in the web. as developers, we have a responsiblity to ensure that whatever user information we get is handled with care in a secure fashion.

bcrypt-nodejs -> a library that is very powerful; to create a very secure login. in real life, we are never storing passwords as plain text (i.e. a string) in our database. this is excatly how companies get hacked and passwords get realesed. we want to store passwords in hashes. we also need to send passwords via HTTPS request so that it is encrypted. only the server once it receives password, wil lknow it's cookies. passwords are stored in hashes. brcypt allows us to do it.

a hash function takes a string and jumbles it up. hash functiosn are one way. you cannot go back. even though has functions usuallyr eturn the same hash for the same value, bcrypt is more secure and does not return the same hash for the same value. now, we can store the hash in our database

we can safely store users' information into our database using bcrypt and even if hackers access our databased they will have a hard time accessing our password. securities is very important, (1) always send sensitive information over HTTPS in a post body, and if you get something like a password (2) you need to store it into the database using smth like bcrypt which generates a hash, everytime a user signs in check that hash with whatever the user input.

// CONNECTING FRONT AND BACK END

we now must run two instances of the server together. first, run the front end. (npm start => react-scripts start) and then back-end (change listen to port 3001 as 3000 is default)

// How to connect servers to database? Download NPM package Knex.js.

There are also different options (pg-promise). But the instructor ercommends Knex.js.

npm install knex
npm install pg

Normally, in one project, you don't have only one server.js file. although we only have 4 endpoints for now, this will get bigger and bigger in a big project. 

solution => create a controllers folder => controllers are things that control whatever happens when an endpoint gets hit.

*/