// REGISTER - creates a new user. we want to get the request information (req.body) and enter into our database object, which has users and an array. so we can do database.users.push to add to this array. you must also remember to send a response if not express will just hang. 

// Why we need databases (and not an array as above) => whenever we make changes to our code, we need to restart nodemon, and database initiates with John and Sally only, so it doesn't include whoever was added from the last restart. we can't use variables to store information that persists and be memorized by the system. databases are really good because they run somewhere in the world and are really good at keeping this information and not go down (and if they do, there will be backups) so users always get added and we don't lose any information. we will get to databases eventually and will actually implement this in a database. without databases, pain points: (1) have to loop through users if we want to check sign in, (2) whenever server restarts, we lose all of our data (i.e. newly registered users)

// transactions -> make sure that both tables are updated. if one table can be updated but not the other, the whole thing failes (if wrapped in a transaction) => prevents inconsisntencies. 

const handleRegister = (req, res, db, bcrypt) => {
    const { email, name, password } = req.body; // destructuring
    if (!email || !name || !password) {
        return res.status(400).json('incorrect form submission');
    }
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
}

module.exports = {
    handleRegister: handleRegister
};

// we can pass dependencies e.g. bcrypt and knex through the function. 

// In server.js, 
// app.post('/register', (req, res) => {register.handleRegister(req,res,db,bcrypt)}) 
// to inject whatever dependencies this handleRegister function needs. 