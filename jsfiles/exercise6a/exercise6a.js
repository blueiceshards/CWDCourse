var list = ["tiger", "cat", "bear", "bird"];
console.log(list[0]);

var numbers = [1, 2, 3, 4];

var booleans = [true, false, true];

var functionList = [function apple() {
    console.log("apple");
}]

console.log(functionList);

var mixedList = ["apples", 3, undefined, true, function apple() {
    console.log("apples");
}];  /* possible, but not advised to have arrays with different types */

console.log(mixedList);
console.log(" ");

/* arrays within arrays */

var listNew = [
    ["tiger", "cat", "bear", "bird"]
];
console.log(listNew);
console.log(listNew[0]);
console.log(listNew[0][2]);

console.log(list);
list.shift();
list.pop();
console.log(list);

list.push("elephant");
console.log(list);

list.concat(["bee", "deer"]); /* why? - see Annex*/
console.log(list);

list = list.concat(["bee", "deer"]);
console.log(list);

list.sort();
console.log(list);


/* Arrays are cool because Javascript has predefined methods that can be used on arrays (functions that can be used on arrays) */

/* control + shift + i auto align */

/* Annex
There are some methods that returns a copy of the list (concat) and others that don't (pop, push) that modify the current list. 

https://www.w3schools.com/jsref/jsref_obj_array.asp

Definition and Usage
The push() method adds new items to the end of an array, and returns the new length.

Note: The new item(s) will be added at the end of the array.

Note: This method changes the length of the array.

Tip: To add items at the beginning of an array, use the unshift() method.

Definition and Usage
The concat() method is used to join two or more arrays.

This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.

so apparently for javascript Array objects, if you do a list.push(), the existing list will be modified!!! and the return value of that function is the length!!!

but for list.concat(), the existing arrays are not modified but instead the return value will be the array my potato wants!!!

so for example if my baby wants to see the concatenated list, my baby just needs to do a console.log(list.concat(["bee, "deer""]))

then should see some >> ['tiger', 'cat', 'bear', 'bird', 'elephant', 'bee', 'deer']!!!

think it doesn;t hve to be this way but its just how javascript Arrays are implemented!!! */