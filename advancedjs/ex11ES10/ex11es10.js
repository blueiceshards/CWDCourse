// ES10; 2019

// flat() - a method to use on arrays

const array = [1,[2,3],[4,5]];
console.log(array);
console.log(array.flat());
console.log(array);

const array3 = [1,2,[3,4,[[[5]]]]];
console.log(array3.flat()); // 5 was only flattened one level. flat => you can say how many layers to flattten (default is one)

console.log(array3.flat(2)); 

// you can also use an arbitrarily large number to flatten, e.g. 50 (or, check homework for a cooler method)

const entries = ['bob', 'sally',,,,,'cindy']
console.log(entries.flat()); // cleans up empty commas for you.

// flatMap() uses basic map function and flattens results to a depth of 1

console.log(array3);
const array3Chaos = array3.flatMap (number => number + '0');
console.log(array3Chaos);

const userEmail1 = '    eddytheeagle@gmail.com';
const userEmail2 = 'johnyemail.gmail.com      ';
console.log(userEmail1.trimStart(), " ", userEmail2.trimEnd());

// formEntries transform a list of key value pairs into an object.

userProfiles = [['commanderTom', 23],['derek', 40],['hansel',18]];
const obj = Object.fromEntries(userProfiles); // Opposite of Object.entries (objects -> arrays)
console.log(obj);
console.log(Object.entries(obj)); 

// try catch block -> try a piece of code, and if there's any errors, to catch them.

try {
    true + 'hi'
    console.log(true + 'hi'); //valid JS because it type coerces true into a string
} catch {
    console.log("You messed up");
}


try {
    bob + 'hi'
    console.log(bob + 'hi'); //throws an error because bob is undefined
} catch {
    console.log("You messed up"); // because it threw an error, it catches and does the catch action
}

// last time, you needed to pass through an error like this:

try {
    bob + 'hi'
    console.log(bob + 'hi'); 
} catch (error) { //ES10, not forced to use this Parameter "error" anymore.
    console.log("You messed up" + error); 
}

