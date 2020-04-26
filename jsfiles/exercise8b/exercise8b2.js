// forEach (new in ECMAScript 5)

var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study js",
    "eat healthy"
];

var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study js!",
    "eat healthy!"
];

var todosLength = todos.length;

for (var i = 0; i < todosLength; i++) {
    console.log(todos[i]);
}

todos.forEach(function (x) {
    console.log(x);
})

// forEach takes an array (todos), asks for an argument (tell me what to do with it) the action that we want to perform on the todos can be represented in a function. this function receives the argument of (x), which is each invididual item in the todos. We are not necesarily accessing the index with forEach. 

// how to access index in forEach? second argument in foreach is index. 

for (var i = 0; i < todosLength; i++) {
    console.log(todos[i]);
}

todos.forEach(function (x, i) {
    console.log(x, i);
})

// forEach tells us more things about what it does. Todos, foreach, run a function, that console logs the todos and the index. It really simplifies it. 

// Alternate method of expression:

function logTodos(x, i) {
    console.log(x, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

// Caveat with forEach - may not work for all browsers as it's a new function. Operamini - partial support.