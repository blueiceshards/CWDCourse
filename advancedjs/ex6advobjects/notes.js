// Advanced objects - reference type, context, instantiation

// Reference type

console.log([]===[]); // false
console.log([1]===[1]); // false

var object1 = {value: 10};
var object2 = object1;
var object3 = {value:10};

console.log(object1, object2, object3);

console.log(object1 === object2); // true
console.log(object1 === object3); // false

// BUT:
// if you change object1.value = 15; => object2.value will be 15, but object3.value will be 10. 

// Objects are the reference types in Javascript. 

// Other Javascript types: numbers, null, undefined, booleans, strings, symbols -> defined by the programming language. The person who wrote JS and ES (i.e. JS standard) says that these are primitive types - we tell you what they are. a reference type, i.e. a non primitive type, are not defined by the programming languages, i.e. they are created by the programmer. 

var number1 = 1; // JS knows what 1 is: it's a number, immutable, always the same 1.
var number2 = 1; // is the same 1 that JS knows about

console.log(number1 === number2); // true

// However, object 1, object2 and object3, are created by the programmmer. They are reference types. 

var object1 = {value: 10}; // Object 1, create a new box, in it, put value 10 into this box. Object1, this is the address of all the contents that you want, and that is Box 1.
var object2 = object1; // I just want you to reference object 1. I want whatever is inside this box. I want whatever is in Object 1, and Object 1 just have information from Box 1, so we just reference that.
var object3 = {value:10}; // A new object because we have new brackets, it's saying, put value 10 in this box. Object 3 creates a new object, put my contents in Box 3, and my address is Box 3. 

// so it makes sense that when you chagne the value of object1, object 2 changes the same but not object 3. 

// So for [] === [], arrays are just objects at the end of the day. [] creates a box (a data structure), and the second [] creates another second box (data structure).

// context (=/= scope)

function b() {
    let a = 4
    console.log(a); // function b creates a new scope. a only exists within the function and not the root scope.
}

// context tells you where we are within the object. *must run in chrome*

console.log(this); // this is the most confusing word in JS. "this" is the window object. clg(this===window) is true. this.alert("hello") in chrome console. what "this" means is what is the object environment that we are in right now. what is to the left of the dot? like window.alert() or this.alert().

// this just refers to what object it is inside of.

function a() {
    console.log(this);
}

/* a(); refers to the window function. 
window.a(); refers to the same thing. */

// to get a different context:

const object4 = {
    a: function() {
        console.log(this); // now, this is the object, i.e. object4. 
    }
}

// The above is important when we do *instantiation*. Instantiation is when we make a copy of the object, and reuse the code. e.g. when creating a game, if you have to create an object for every single player, it's very inefficient. to solve that, we can do instantiation, instances for multiple copies of an object. 

// Instantiation

class Player { //capitalize a class. if you want to make a copy of an object, should do this.
    constructor(name, type) { //everytime I make a copy of a player, the first thing I run is the constructure function, which creates the below properties. 
        console.log('player', this);
        this.name = name; // when we create a player, "this" to access name and type property. justt a syntax we need to get used to. to access a player and make copies of it, need to run a constructuor, all the properties and methods that you want the player to have. anytime  you wanna access a property, you need to this.name
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am a ${this.name}, I'm a ${this.type}`); //can create methods. to access introduce, need to this.introduce()
    }
} 

class Wizard extends Player { // JS keyword, means you want to add on to whatever Player has
    constructor(name, type){ // class, need a constructor
        super(name, type) // anytime we extend something, we also need to call the constructor function of the Player. we have to do something called super, with the properties we wanna pass to the constructor. whenever you extend, you want to use super so you have access to these (i.e. name and type) 
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEE I'm a ${this.type}`);
    }
}

// instead of constantly creating players and saying they are wizards and they can play, we can do the following:

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn, Dark Magic");

console.log(wizard1);
console.log(wizard1.play());
console.log(wizard1.introduce());

console.log(wizard2);
console.log(wizard2.play());
console.log(wizard2.introduce());

// back in the day, we used to use "classical inheritance", which uses "prototypes", which isn't as nice as instantiation. as soon as we say "class", we want to make copies of players, of wizards. when I do the new keyword, make an instance of wizard, which uses some f(x)ionality from Player and adds its own play() fucntion too. 