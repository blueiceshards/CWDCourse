// Two other ways we can loop

const basket = ['apples', 'oranges', 'grapes'];


// for
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

// forEach
basket.forEach(item => console.log(item));

// do while 

// for of *NEW in ES6* - iterating over this array. i.e. go one by one and look at these items in the array. iterating can be done on iterables (arrays, strings). for of arrows iterating over iterables. you CANNOT use objects for for of as for of requires things are iteratable (arrays or strings), and NOT objects.

for (item of basket) {
    console.log(item);
}

for (item of 'basket') {
    console.log(item);
}

// for in *NEW* for enumerating objects
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

for (item in detailedBasket) {
    console.log(item); // apples, oranges, grapes
}

// the for in loop allows us to loop over and see the object properties so that I can check wht I need to go grocery shopping for. tricy part -> we are nto iterating. (iterating: arrays & strings) objects: enumerating. properties of an object are enumerable. an object is enumerable if it allows us to see the properties. so apples, oraggnes, and grapes are enureable. enumerating si for object.

// you can use for in for arrays too because arrays are also enumerable as explained below.

for (item in basket) {
    console.log('for in', item); // 0, 1, 2
}

// this is because underneath the hood, arrays are objects. arrays have index of 0, 1, & 2. basket is an object with the following propoerties:

/* 
basket = {
    0: 'apples',
    1: 'oranges',
    2: 'grapes'
}
 */

// the for in loop is enumerating over the properties, 0, 1, & 2. 

