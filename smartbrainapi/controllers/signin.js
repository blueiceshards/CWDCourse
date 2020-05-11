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

const handleSignin = (req, res, db, bcrypt) => {
    const { email, password } = req.body; // destructuring
    if (!email || !password) {
        return res.status(400).json('incorrect form submission');
    }
    db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
        const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
        if (isValid) {
            return db.select('*').from('users')
            .where('email', '=', email)
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
}

module.exports = {
    handleSignin: handleSignin
}