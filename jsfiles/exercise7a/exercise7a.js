/* 
JS Data Structures

Objects are collections of properties. They are both JS data structures and JS types. 

*/

var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
}

console.log(user);

/* An object is more dynamic. It has properties and values.

An array has an index and list-DataTransferItemList.  

How to grab properties?*/

console.log(user.name);

/* Array: we have pop, push, concat, to change the Array. For objects,
 */

user.favoriteFood = "spinach";

user.isMarried = true;

console.log(user);

/* Why is an array not an object? Because an array is just an indexed list. 

Data structuers help us organise things. An object is good at containing user information. E.g. when building a game, you can have an object=wizard, with properties. but his spells can be a list(array). You can have arrays inside of object*/

user.spells = ["abc", "shazam", "boo"];
console.log(user);

/* You can also have objects inside an Array.  */

var list = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "jess",
        password: "123"
    }
];

console.log(list);

console.log(user.spells[1]);
console.log(list[0].password);

user.shout = function() {
    console.log("AAAAAH!");
}

console.log(user.shout());

/* user.shout() is a method (special type of function) a function inside an object is a method. shout is a method of user. 

just like list.pop(), pop is a method of list. 

console.log() is a method. console is an object. 

methods are functions in an object
 */

 user2 = {}
 list2 = []


 console.log(user2);
 console.log(list2);

/*  We can have empty lists and objects. 
 */

 var emptyObj = {};
 var nullObj = null;

 console.log(emptyObj);
 console.log(nullObj);

/*  A null object is completely emptyObj. You cannot set properties (e.g. name) to a null object (but you can set properties to an empty object). */