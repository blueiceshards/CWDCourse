const http = require('http');

const server = http.createServer((request, response) => {
    console.log('headers', request.headers);
    console.log('method', request.method);
    console.log('url', request.url); // this stuff will show up in terminal.
    const user = {
        name: 'John',
        hobby: 'Skating'
    } 
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
});

server.listen(3000);

/* 
localhost:3000 -> nothing happens, 
however, if you look at your console, it says "I hear you".
This is because server.js is running a node in the terminal it's listening to connections. when you click refresh, and try to connect, it will refresh and run console.log. but now, browser is just hanging there because we are not responding with anything. we are just console logging on our end but we are not giving a response.  

With the new response parameters, we can go to control shift i, network, localhost, headers, and status code: 200 ok, and content type is text/html.

we have created our first server. but this HTTP is pretty barebones -> building http is what everyone does. there are better tools that are more relevant than running HTTP => express.js

For backend, the most popular Javascript library is Express. plenty of tools and information, express is the way to go. 

*/