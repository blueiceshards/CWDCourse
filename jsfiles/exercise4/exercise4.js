var age = Number(prompt("What is your age?"));
if (age < 18) {
alert("Sorry, you are too young to drive this car. Powering off");
}
else if (age===18) {
alert("Congratulations on your first year of driving. Enjoy the ride!");
}
else {
alert("Powering On. Enjoy the ride!");
}

/* Since JavaScript support both strict equality and type-converting equality, it's important to know which operator is used for which operation. As I said that, === takes type of variable in consideration, while == make type correction based upon values of variables, following are couple of more differences between "==" and "===" operator in JavaScript programming language :

1) When we compare two variables of different type e.g. a boolean with a string or a number with String using == operator, it automatically converts one type into another and return value based upon content equality, while === operator is strict equality operator in Java, and only return true if both variable of same type and also contains same value. This will be much clear with following example of == and === operator in JavaScript :

0==false   // true, because false is equivalent of 0
0===false  // false, because both operands are of different type
2=="2"     // true, auto type coercion, string converted into number
2==="2"    // false, since both operands are not of same type

2)  "==" operator is known as type coercion operator and anytime if both values are same and compared using ==operator, type coercion happens. On the other hand === is known as strictly equality operator. It's much similar Java's equality operator (==), which gives compilation error if you compare two variables, whose types are not compatible to each other. In fact, you should always use "===" operator for comparing variables or just for any comparison.

Read more: https://www.java67.com/2013/07/difference-between-equality-strict-vs-operator-in-JavaScript-Interview-Question.html#ixzz6KVd8zqDY */