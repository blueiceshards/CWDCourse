// New functions to add to strings, .padStart() and .padEnd(). Great for aligning strings if you want specific padding for them.

console.log("Turtle".padStart(10)); // yields "    Turtle" which is 10 total spaces including the string. 
console.log("Turtle".padEnd(10)); // yields "Turtle    " which is 10 total spaces including the string.

// Trailing commas in functions, parameter lists, and const. => syntactic and makes everything looks nicer, without giving an error.

const fun = (a,b,c,d,) => { // don't forget the equal sign before input.
    console.log(a);
}

console.log(fun(1,2,3,4));

// Object.values and Object.entries - useful because before this we had Object.keys which allowed us to do somethign similar to arrays, but on objects. 

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr Grinch', //because not an array, cannot do map, filter or reduce.
}

// but is an ugly object but you still want to iterate over them. before, we can do the following:

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
}) // one way to iterate/loop through objects.

// Object.entries makes things easier.

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value => { 
    console.log(value);
})

// Object.entries gives a lot of control, you can do foreach, map, reduce, all those array functions.

Object.entries(obj).map(value => {
    return value[1] // second item in the array (Santa, Rudolf, Mr Grinch)
    + value[0].replace('username', ''); // first item in the array (username0, username1, username2)
})

const entry = Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})
console.log(entry);

// Async await to be learnt in the next video.