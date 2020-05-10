const fs = require('fs');

function question1() {
    fs.readFile('./input.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1;
            } 
            else if (currentValue === ')') {
                return acc -= 1;
            }
        },0)
        console.timeEnd('santa-time');
        console.log('floor:', answer);
    })
}

question1();

function question2() {
    fs.readFile('./input.txt', (err,data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => { //some can stop function halfway
            if (currentItem === '(') {
                accumulator += 1;
            } 
            else if (currentItem === ')') {
                accumulator -= 1;
            }
            counter ++;
            return accumulator < 0; //ends the function because of some. 
        })
        console.timeEnd('santa-time');
        console.log('basement entered at', counter);
    })
}

question2();