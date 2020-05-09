const c = require('./script2.js')

const a = c.largeNumber;
const b = 11;

console.log(a + b);

/* setTimeout(() => {
    console.log(a + b);
}, 3000) */

/* 
touch script.js => creates empty script.js
node script.js => runs the script.js and automatically exits with process.exit().
node
global.setTimeout -> is actually a node function.

import largeNumber from 'script2.js';

unexpected token: import. this is because node has yet to implement the ES6 feature of import statements. there are ways around this e.g. adding packages that allow us to do it. 

common JS way: see above

*/

