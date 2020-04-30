// Pass by Value vs Pass by Reference

// Primitive types are immutable. We can't really change them. In order to change them, we need to remove the primitive type. If Var a = 5, for me to change what that 5 value is, I have to literally remove it from memory and create somthing new like a = 10. When I assign variable a to the value 5, somewhre in the memory is going to contain a reference to the value 5. if I do variable b = 10, same thing. They don't know of each other's existence.

// Objects are passed by reference.

var a = 5;
var b = 10; // each has an address of where their respective primitive values sits in memory.

var b = a; // primitive types are passed by value. passed by value,

b++;

console.log(a);
console.log(b);

// all the JS engine did was to copy the prijmive type value 5, like b = 5, so now b has a reference to the value primitive type 5. all we did was copy the value. even though we did b = a, all we did was to copy the value, and put it into a new memory space in our machine. we made a copy. they don't have a connection whatsoever. pass by value => we copy the value, and create that value somewhere else in memory.

let obj1 = {name: "Yao", password: "123"};
let obj2 = obj1;

obj2.password = "easypeasy";

console.log(obj1);
console.log(obj2);

// now, both obj1's and obj2's passwords were updated by doing this. this is due to pass by reference. objects in javascript are stored in memory and passed by reference. we don't copy the value like we did with primitive. when we assigned obj1 to obj2, we are sying, this is where the object is in memory. obj1 and obj2 are both pointing, somewhere in memory, to a shelf that contains this information. obj2 = "address in memory where obj1 is". when I change obj2.password, i'm saying, change password on this object in memory, that also, obj1 is pointing at/referencing. 

// Why is it good? By just having one object here, we are saving space in memory. we are not copying/cloining the object, reference one location instaad of loadding up our memory.

// Why is it bad? unlike primitve type, someone else might accidentally change property on that referenced object. 

var c = [1,2,3,4,5]; //remember, arrays are simply objects
var d = c;
d.push(12837921);

console.log(c); // because arrays are passed by reference (arrays are objects), c changes also.
console.log(d); 

// if c was a massive object -> copying would use a lot of memory. but sometimes, we might want to clone an object so we don't modify it like this. how do we do this?

// you can do:

var e = [1,2,3,4,5]
var f = [].concat(e); // pushes whatever is in c into this empty array.
f.push(473829);

console.log(e);
console.log(f);

// objects are a little more difficult.

let obj = {
    a: 'a', 
    b: 'b', 
    c: {
        deep: 'try and copy me'
    }
};

// if I want obj to be in a different location in memory, I cannot obj2 = obj. instead, we need to clone the object. 

let clone = Object.assign({}, obj);
let clone2 = {...obj} // alternate method *new*
let superClone = JSON.parse(JSON.stringify(obj)) //deep clone

obj.b = 5;
obj.c.deep = "hahaha";

console.log(obj);
console.log(clone); // the cloned object, b, didn't change because of Object.assign
console.log(clone2); // however, this is a shallow clone.
console.log(superClone); //superClone did a deep clone.

// but what would happen if there is an object within an object? Let's change 'c' to {deep}. now, everything changes to "hahaha". this is because each object gets passed by reference. although we cloned the initial object, this is a shallow clone. it cloned the first level i.e. memory address in the object obj. but within this object, there is another address to another obj (deep) another address someplace in memory. this address never changed. always referenced this object (deep). shallow cloning -> only clone the first layer.

// Deep cloning: superClone. 

// Deep clone coudl have performance implications. if this object was extremely deep, a massive object, it will take a long time to clone everything. you won't see it out in teh wild too often. if you're cloning objects like this, there is probably some other way you should be doing things. but this shows the idea of pass by reference, shallow cloning, and deep cloning, some ways to use objects to get the desired effect. 



