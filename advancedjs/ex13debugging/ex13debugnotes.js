const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (a, b) => a.concat(b), []);
console.log(flattened);

// How to debug?

// Step 1: Read the code => "reduce", a = accumulator, b = array. accumulator starts with an empty array.

// Make it easier to understand.

const flattened2 = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        console.log('array', array);
        console.log('accumulator', accumulator);
        return accumulator.concat(array)
    }, []);

console.log(flattened2);

// flattened, flattened2 both flatten the array.

const flattened3 = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        // debugger;
        return accumulator.concat(array)
    }, []);

console.log(flattened3);

// instead of using clg, you can use debugger in chrome console pauses the code in the middle of the execution. opens up the window exactly where it stops. it will tell you what accumulator is, and what array is. you can click play, which resumes the entire thing, or click stepover, which goes to the next line. and literally go thoruhg the entire function. it also tells us variables in scope, and context (this value) when it's done executing, it gives us the console back. 

// using console and debugger, we can use these techniques to find out what's going on. 