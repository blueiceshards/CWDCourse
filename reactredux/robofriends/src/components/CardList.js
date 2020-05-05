import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (<Card
                        key={robots[i].id}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                    );
                })
            }
        </div>

    );
}

export default CardList;

/* CardList receives robots now, so you have access to it in the props -> you can destructure it in Cardlist = ({robots})

efficient -> loop over the robots and create a card component for each one.

robots.map(user,i) => second parameter of map is index.

must wrap cardComponent in curly brackets cos javascript -> it must know to evaluete. P.S. a better name for cardComponent would be cardsArray.

index.js:1 Warning: Each child in a list should have a unique "key" prop. => when working with react, what the virtual DOM does is keep track of what all these cards are but without something called a keyprop, if some of these cards get deleted, react won't know which one is which and will have to change the entire DOM, vs it has a keyprop, this one gets removed, i can just remove this from the DOM. we wnat to minimise the amt of work we do to the dom. when we use a loop, we have to give it a unique key. Card key={i} must wrap in curly cos javascript.

key prop should have something that doesn't change. for e.g. index (or i in this case) coudl change if array items get moved. so better key in this case would be something unique like id.

because anything we put in curly is JS, including comments,

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        return (<Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
            />
        );
    })
    return (
        <div>
            {cardComponent}
        </div>

    );
}

you can wrap cardComponent in the curly brackets.

react -> other than JSX syntax, everything else is just javascript. so, weare able to create a cardList component, that lists cards, anda ll we need to do is to pass it a prop of robot. 

*/