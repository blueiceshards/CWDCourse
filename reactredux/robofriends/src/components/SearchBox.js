import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className = 'pa2'>
            <input className = 'pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;

/*
Always a good idea to wrap searchbox in Div tags incase you want to add more stuff to it.
pa2 => Tachyons class

{searchChange} -> we are using deconstructor here: {} allows us to grab the props object and grab its properties. 

HTML -> onchange event listenign to anytime input changes
*/