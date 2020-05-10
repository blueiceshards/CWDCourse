const fs = require('fs');

fs.readFile('./input.txt', (err,data) => {
    console.time('funchallenge');
    if (err) {
        console.log('errorrrrr'); 
    }

/*     const text = data.toString().split('');

    let up = [];
    let down = [];

    text.forEach(element => {
        if (element === '(') {
            up.push(element);
        }
        else if (element === ')') {
            down.push(element);
        }
    }) */
    
    const text = data.toString();
    const up = text.match(/\(/g);
    const down = text.match(/\)/g);

    const net = up.length - down.length; 

    console.log('Santa ends up on Floor', net);

    console.timeEnd('funchallenge');
})

fs.readFile('./input.txt', (err,data) => {
    console.time('funchallenge');
    if (err) {
        console.log('errorrrrr'); 
    }
    
    const text = data.toString().split('');

    let ups = [];
    let downs = [];
    let steps = 0;
    let answers = []

    text.forEach(element => {
        if (element === '(') {
            ups.push(element);
            steps++;
            if ((ups.length+1)===downs.length) {
                answers.push(steps);
            }
        }
        else if (element === ')') {
            downs.push(element);
            steps++;
            if (downs.length===(ups.length+1)) {
                answers.push(steps);
            }
        }
    })

    console.log('The character that causes Santa to first enter the basement is',answers[0]);
    console.timeEnd('funchallenge');
})
