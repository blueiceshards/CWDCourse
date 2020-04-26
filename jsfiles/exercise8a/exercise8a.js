var database = [
    {
        username: "andrei",
        password: "supersecret",
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"

    },
    {
        username: "Sally",
        timeline: "Javascript is soooo cooool!"
    }
];

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
        console.log(newsFeed);
    }
    else {
        alert("Sorry, wrong username and password!");
    }
}

signIn(usernamePrompt, passwordPrompt);

// Then, load the page in Chrome console, and enter the function signIn(usernamePrompt, passwordPrompt).



