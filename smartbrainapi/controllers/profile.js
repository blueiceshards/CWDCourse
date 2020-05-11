// PROFILE-ID (GET REQUEST) i.e. we want to GET the user. we don't really use /profile/:id yet on our app; it's just for future development. sometimes, backend engineers develop endpoints that might not be used for the front end, butt possibly used in future installations, e.g. if in the future we want a profile page for each of our users. 

const handleProfileGet = (req, res, db) => { // this syntax means we can type in our browser anything e.g. /profile/2831 and we can grab this ID through the request.params property. profile.id is useful to update our name or email. 
    const { id } = req.params;
    db.select('*').from('users').where({ id: id }).then(user => { // or {id} because property and value are the same
        if (user.length) {
            res.json(user[0]);
        } else {
            res.status(404).json('Not found')
        }
    }).catch(err => res.status(400).json('Error getting user'))
}

module.exports = {
    handleProfileGet
}