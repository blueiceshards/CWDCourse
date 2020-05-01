// ES6 and Webpack 2

//js1
export const add = (a, b) => a + b; // can export multiple functiosn from the same file
//or
export default function add() {  // can only export one function
    return a + b;
}

//js2
import { add } from './add';
//or respectively
import add from '.add'; // assuming other file is add.js. 

// Webpack, like browserify, is a module buldler (bundles js files). and just like broserify, it traverses the dependency tree (exports and import tags) into a single file, or can have multiple file based on our needs. with webpack, we can use ES6 in all browsers. we now have a great system in js. this is what the industry is using. when we get to react, we will use this alot and makes things clean for us.

// webpack has a config file 

// webpack
module.exports = {
    entry: './app/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    }
}

// one person on the team will configure this file and everything is done, everone else jsut builds on it. very useful tool, and creates a bundle.js file. all our html files look nice and simple. 

// brief history of JS modules: https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde

// more modules resources: https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/


