import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;

// we need to import react so that our file can understand JSX which is the HTML like syntax. 

// https://robohash.org -> rly cool API -> returns a random robot. 200x200 is the URL property.


// className stuff is predefined from tachyons package. 
// Card must now accept parameters, i.e. props. must wrap js expressions props.name and props.email in curly brackets. same for template strings i.e. the URL must wrap in curly brackets.

// when you do const {name, email, id } = props, you can delete props from props.name props.email, props.id. 

// even better: delete the const and replace {name, email, id} in the first reference to props after const Card = (props). receiving props, and destructuring props right inside of the brackets. this is much cleaner. => in a fast way, we created our own cards. 
