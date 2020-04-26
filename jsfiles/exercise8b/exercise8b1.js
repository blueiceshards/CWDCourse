// Loops

var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study js",
    "eat healthy"
];

/* for (var i = 0; i < todos.length; i++) {
    console.log(todos[i] + "!");
} */

// Start off with 0, as long as i is less than 5, do whatever in this thing, then add 1 to i.

for (var i = 0; i < todos.length; i++) {
    todos[i] = todos[i] + "!"
};

var todosLength = todos.length;
for (var i=0; i < todosLength; i++) {
    console.log(todos);
    todos.pop();
}

console.log(todosLength); // If not, if you put i < todos.length, it will stop halfway through when i is greater then the ever-decreasing todos.length. This is basically assigning 5 to todosLength.

/* var counterOne = 0
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++;
} */

// while loop checks conditions first before doing the thing.

var counterOne = 10
while (counterOne > 10) { // 10 > 10 fails so doesn't run
    console.log("while", counterOne);
    counterOne--;
}

// do while loop does the thing first before checking the counterTwo.

var counterTwo = 10
do {
    console.log("do while", counterTwo); // does first
    counterTwo--
} while (counterTwo > 10); // before checking condition

// most of the time, will be using for loop. 

// a better way of doing for loop: forEach (new in ECMAScript 5)

