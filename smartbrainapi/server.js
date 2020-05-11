const express = require('express');
// const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors'); // chrome doesn't trust thatt our server is secure. we could be a hacker that is making a request. we need to do something called 'cors' it's a middleware that lets us link our front end to our back end. 
const knex = require('knex');

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

app.get('/', (req, res) => {
    res.send(database.users);
})

// SIGNIN
// we want to check whatever the user enters on the front end is going to come back in the request, and we want to check it with our current list of users to make sure that the passwords match. => we need some sortof database. 

// Databases are really good at grabbing and checking against differentt inputs, vs. a variable (or an array, in the below case) where you have to loop through every thing. 

/* const database = { // fake create a variable called database for now
    users: [ // which has a users property with an array of objects with more properties each.
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0, // how many times john submitted url request
            joined: new Date() //comes with JS, will just create a date when this part gets executed. 
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0, // how many times john submitted url request
            joined: new Date() //comes with JS, will just create a date when this part gets executed. 
        },
    ]
} */

// Before using req.body, we need to use bodyparser because express doesn't know the json that we just sent over.

app.post('/signin', (req, res) => {
    db.select('email', 'hash').from('login')
    .where('email', '=', req.body.email)
    .then(data => {
        const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
        if (isValid) {
            return db.select('*').from('users')
            .where('email', '=', req.body.email)
            .then(user => {
                res.json(user[0])
            })
            .catch(err => res.status(400).json('unable to get user'))
        } else {
            res.status(400).json('wrong credentials')
        }
    })
    .catch(err => res.status(400).json('wrong credentials'))
    //express comes with a builtin json method that we can use and it has added features when responding with json. for e.g., res.json('success') now we receive a json string instead of just a string. 
})

// REGISTER - creates a new user. we want to get the request information (req.body) and enter into our database object, which has users and an array. so we can do database.users.push to add to this array. you must also remember to send a response if not express will just hang. 

// Why we need databases (and not an array as above) => whenever we make changes to our code, we need to restart nodemon, and database initiates with John and Sally only, so it doesn't include whoever was added from the last restart. we can't use variables to store information that persists and be memorized by the system. databases are really good because they run somewhere in the world and are really good at keeping this information and not go down (and if they do, there will be backups) so users always get added and we don't lose any information. we will get to databases eventually and will actually implement this in a database. without databases, pain points: (1) have to loop through users if we want to check sign in, (2) whenever server restarts, we lose all of our data (i.e. newly registered users)

// transactions -> make sure that both tables are updated. if one table can be updated but not the other, the whole thing failes (if wrapped in a transaction) => prevents inconsisntencies. 

app.post('/register', (req, res) => {
    const { email, name, password } = req.body; // destructuring
    var hash = bcrypt.hashSync(password);
    db.transaction(trx => { //create transation when you have to do more than 2 things at once, and you use trx object instead of db to do the following operations:
        trx.insert({
            hash: hash,
            email: email
        })
        .into('login') // inserted hash and email into table 'login'
        .returning('email') // it returned the email
        .then(loginEmail => { // then, use login email to to also return another trx transatction
            return trx('users') // to insert into the users table
                .returning('*')
                .insert({ 
                    email: loginEmail[0],
                    name: name,
                    joined: new Date()
                }).then(user => {
                    res.json(user[0]); // and responded with json
                })
        }).then(trx.commit) // and in order for new stuff to get added, we have to make sure we commit
        .catch(trx.rollback) // if anythingg fails, we rollback the changes. 
    }).catch(err => res.status(400).json('unable to register'))
})

// PROFILE-ID (GET REQUEST) i.e. we want to GET the user. we don't really use /profile/:id yet on our app; it's just for future development. sometimes, backend engineers develop endpoints that might not be used for the front end, butt possibly used in future installations, e.g. if in the future we want a profile page for each of our users. 

app.get('/profile/:id', (req, res) => { // this syntax means we can type in our browser anything e.g. /profile/2831 and we can grab this ID through the request.params property. profile.id is useful to update our name or email. 
    const { id } = req.params;
    db.select('*').from('users').where({ id: id }).then(user => { // or {id} because property and value are the same
        if (user.length) {
            res.json(user[0]);
        } else {
            res.status(404).json('Not found')
        }
    }).catch(err => res.status(400).json('Error getting user'))
})

// APP.PUT FOR THE IMAGE
app.put('/image', (req, res) => {
    const { id } = req.body;
    db('users').where('id', '=', id) //knex syntax sql language
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0]);
        })
        .catch(err => res.status(400).json('unable to get entries'))
})

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
*/