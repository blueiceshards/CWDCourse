const fs = require('fs'); // fs stands for filesystem and allows you to access filesystem.

// READFILE
// first parameter is the path to the file
// the second parameter of readFile is afunction, and this function either has error, or data.

// if you don't do anything, node script.js yields <Buffer 48 65 6c 6c 6c 6f 6f 6f 6f 6f 20 74 68 65 72 65 21>. if no encoding is specified, then the raw buffer is returned. so you need to console.log(data.toString());

// toString('utf8') by default. utf8 is a type of encoding we have now that is pretty standard with HTML5 and pretty much everyone uses it on the web. it's a way for us to use characters - latin characters, ABCs, korean, japanese, chinese, they are all represented by a number. utf8 is a way of encoding these nubmers so that we can read them. before utf8 existed, ASCII was for latin based languaged (ABCs) and utf expanded that to include many more languages from different parts of the world. 

fs.readFile('./hello.txt', (err,data) => {
    console.time('funchallenge');
    if (err) {
        console.log('errorrrrr'); // if you misspell the readfile, it will console.log the error message.
    }
    console.log('Async', data.toString());
    console.timeEnd('funchallenge');
})

// READFILESYNC

// readFile is asynchronous. because it is asynchronous, it will execute line 3, then come to line 10 and read line 10. because line 10 is readFileSync i.e. syncrhonouse, it says, wait until I'm done with this task, then it will print out 2 at line 11, then the asyncrhonouse thing will say hey I finished reading the file, here's the data.

// a problem with readFileSync => we are going to halt or pause the execution of our file until it reads the entire text (it's a problem if the file we are reading is very very very big). and the program is just going to be waiting until the task is finished. vs the readFile, which says you can go on ahead, i'll let you know when I'm done with this reading. when you're building a server, e.g. an express server with routes, we want to use readFile if we are using any sort of a file so that we are not blocking the execution of the program and the program can keep running.  

const file = fs.readFileSync('./hello.txt'); // Sync stands for synchronous. 
console.log('Sync', file.toString());

// APPEND
/* fs.appendFile('./hello.txt', ' This is so cool!', err => {
    if (err) {
        console.log(err);
    }
});  */// if the file (first parameter) doesnt exist, it'll just create the file for us. 

// WRITE - creates a new file
/* fs.writeFile('bye.txt', 'Sad to see you go', err=> {
    if (err) {
        console.log(err);
    }
}) */

// DELETE 
/* fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err);
    }
    console.log('Inception');
})  */// deletes the bye text

// WHY IS THIS COOL?
// Now, we are able to use programming in js outside of just web browsers and outside of just building websites and servers. what we can do now witht his knowledge is we can make our lives easier. e.g. we want to read an excel file, we can use readfile and npm nodules to read columns in an excel and do some math. or maybe you have an excel sheet with emails and you want to send out an email to 100 people on this list but you don't want to be caught spamming by the google filter. using something like node you can create something that sends out emails every 6 hours. 
// If you have a robot, instead of reading from the filesystem, you can read from the robot. through wireless or wires, and get an input of some data that the robot has. e.g. it detected a cat. using that input you can do something (respond) e.g. send an email that the robot just detected a cat and send an output. this is an input-output. you get an input from some source, another machine, and you are also outputting it, something for consumption. this opens up a world where you can create tools for yourself and automate things. this is the first step on how to use programming to solve real life problems and make life more efficient. 

// SANTA'S NODE HELPER (next homework) -> use fs module, node, and js. 