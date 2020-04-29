//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

function winBattle(bool) {
    return bool;
}

var experiencePoints = winBattle(true) ? 10 : 1
console.log(experiencePoints);

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");

console.log(moveCommand("forward"));

//#3 return value when moveCommand("back");

console.log(moveCommand("back"));

//#4 return value when moveCommand("right");

console.log(moveCommand("right"));

//#5 return value when moveCommand("left");

console.log(moveCommand("left"));

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!