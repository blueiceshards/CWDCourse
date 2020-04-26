// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array);

// 1. Remove the Banana from the array.

array.shift();
console.log(array);

// 2. Sort the array in order.

array.sort();
console.log(array);

// 3. Put "Kiwi" at the end of the array.

array.push("Kiwi");
console.log(array);

// 4. Remove "Apples" from the array.

array.splice(0,1); // At position 0, remove 1 item.
console.log(array);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// you should have at the end: ["Kiwi", "Oranges", "Blueberries"]

array.reverse();
console.log(array);

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);

// Splice
// At Position 2, remove 2 items.
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2,2);
console.log(fruits);

// The splice() method adds/removes items to/from an array, and returns the removed item(s). This is why, when you console.log(fruits.splice(2,2)); it returns the removed items so you need to console.log(fruits); ...