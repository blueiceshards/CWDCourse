// What is a programme? (1) allocate memory, (2) parse and execute scripts, i.e. read and run commands. 

// JS engine (chrome= V8) consists of (1) memory heap where memory alloc happens, and (2) call stack where code is read and executed, and tells you where you are in the programme.

const a = 1; // allocates into memory 

// memory leak => we have a limited memory. by increasing number of variables, memory leaks happen when we have unusued memory laying around. "global memorys are bad" => if we don't clean up, we fill up memory heap and eventually browser can't work.

console.log('1'); // call stack

// call stack reads and executes script. 

const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}
console.log(one());

// Call stack. first, we run the one function, and as we enter the call function, two gets on top of the call stack. now, we have clg('4') in the call stack. 
// Call Stack as follows:
// console.log('4');
// two();
// one();
// and removes in order of being called until call stack is empty.

// JS is a single-threaded (one call stack only, can only do one thing at once. call stack is first in, last out, whatever is at the top gets run first, and then below that, below that, until the call stack is empty.) langugae that can be non-blocking. 

// other languagges can have multiple call stacks (multi-threaded) could be beneficial so you don't have to wait around. but running single-thread code is easy because don't have to deal with complicated issues that arise from multi-threaded envts , e.g. deadlocks. 

// synchronous prog -> means that line 1 gets executed, then line 2 gets executed ,than line 3 gets executed. so console log 2 doesn't execute until console log 1 executes. 

console.log('1');
console.log('2');
console.log('3');

// stackoverflow -> when a call stack overflows (kind of like memory leaks and memory heap can overflow). stack overflow, the call stack gets biggerx1000 until it doesn't have any space anymore. 

// to create a stack overflow, just do a recursion:

// function foo() {
//     foo();
// }
// foo();

// the problem with single threaded (one statement executed at a time) => what if line 2 is a huge task (loop through array with 10000000 items)? -> clg 3 will take a really long time to log. if this is on a website, it will freeze until task 2 is done and the user will just not be ablet o do anything => not very good. with syncrhonous tasks, if we have 1 function that takes a lot of time, it holds on the line. 

// but JS can be non-blocking -> don't wait around for things thta ttake time. how? asynchronous (a behavior). synchronous is great because it's predictable (in order), but it's slow. 

// asynchronous programming: 

console.log('1');
setTimeout(() => {      // function in browser that lets us create a timeout. 
    console.log('2');
}, 2000)
console.log('3');

// setTimeout first Parameter is the function, second is the time in milliseconds.

// now, 3 gets executed before 2 two seconds later. this is asynch prog. 

// JS run-time environment is necessary for JS to run (along with JS engine). JS RTE is part of the browser, included in the browsers. on top of the engine, they have web APIs, callback queue, and an event loop. setTimeout is part of the web API  (not really a part of JS, but it's for the browsers to use so that we can do asynch prog)


// *Call Stack*
// 1. console.log('1');
// 2. setTimeout(() => {      
//     console.log('2');
// }, 2000)
// 4. console.log('3');
// 8. callback(), and by running callback(), we have clg('2'). 
// 9. clg('2'). 

// *Web API* (DOM-document, AJAX-XMLHttpRequest, Timeout-setTimeout)
// 3. setTimeout(() => {      
//    console.log('2');
// }, 2000)
// starts timer of 2 seconds. 
// 5. setTimeout() is done, we have a callback() of setTimeout(), and we add this to callback queue.

// *Callback Queue* (onClick, onLoad, onDone) -> addEventListener, onclick, we run the callback function. created click function, and we are just listeming to it, whenever a click happens on teh webspage i.e. on the DOM, we run a callback function which (for eg, clgs click). 
// 6. callback()

// *Event Loop*
// 7. event loop keeps checking if call stack is empty. if the call stack is empty and nothing running in JS engine, will check for callbacks in teh callback queue -> call stck is empty and we can throw something in there to make it do some work. so now, they put callback() in to the call stack. 

// even if setTimeout is zero seconds, it will still go through the process, i.e. still go tentered into Web APIs, callback queue, and event loop. by the time this was happening, the call stack had already moved on to clg(3). only after clg(3) was done, and the call stack is empty, the event loop says that we can call clg(2).

// this undertanding is great for interviews. 

// asynch stuff happens a lot -> e.g. talking bw machines, speaking to database, making network requests, image processing, reading files, 

// JS is a single-threaded language that can be non-blocking. it has one call stack and it does one thing at a time. in order to not block the single thread, it can be asynch with callback functions, which get run in teh background through the callback queue and then the event loop to bring it back into the call stack. 
