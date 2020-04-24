var name = "Billy";
name = "Juliexxx";

if (name === "Billy") { 
    console.log("Hi, Billy!");
}
else if (name==="Julie") {
    console.log("Hi, Julie!");
}
else {
    console.log("Hi, not Billy!");
}


if (name2==="Billy" || name2==="Ann") {
    console.log("Hi Billy/Ann!")
}
var name2 = "Susy";

if ("Ann") {
    console.log("Hi")
}

var firstName = "Bob";
var lastName = "Smith";

if (firstName === "Bob" && lastName === "Smith") {
    console.log("Hi Bob Smith!");
}

/* 
Order matters (if you put the vars after the if condition,  it won't work)
 */

if (!(name==="Bob")) {
    console.log("Hi" + " " + name + "!")
}

 /* if not name==="Bob" or if name is not equal to Bob */
