// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]

function clean(arr) {
    let answer = [];
    let done = [];
    arr.sort((a, b) => a - b);
    arr.forEach(item => {
        if (done.includes(item) === false) {
            answer.push(arr.filter(num => num === item));
            done.push(item);
        }
    })
    return answer;
}

console.log(clean(array));

array2 = [1, "2", "3", 2];

function clean2(arr) {
    let answerNum = [];
    let answerStr = [];
    let doneNum = [];
    let doneStr = [];
    let answer = []
    arr.sort((a, b) => a - b);
    arr.forEach(item => {
        if (typeof item === "number") {
            if (doneNum.includes(item) === false) {
                answerNum.push(arr.filter(num => num === item));
                doneNum.push(item);
            }
        } else if (typeof item === "string") {
            if (doneStr.includes(item) === false) {
                answerStr.push(arr.filter(num => num === item));
                doneStr.push(item);
            }
        }
    })
    answer.push(answerNum.flat(1));
    answer.push(answerStr.flat(1));
    return answer;
}

console.log(clean2(array2));

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

function smart(arr, num) {
    answer = [];
    arr.forEach(item => {
        arr.forEach(item2 => {
            if (item + item2 === num) {
                answer.push([item, item2])
            }
        })
    })
    return answer;
}

console.log(smart([1, 2, 3], 4));

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function convert(input) {
    if (typeof input === "string") {
        if (input[0] === "#") {
            input = input.substring(1);
        }
        red = parseInt(input.slice(0, 2), 16);
        blue = parseInt(input.slice(2, 4), 16);
        green = parseInt(input.slice(4, 6), 16);
        const obj = {
            red, blue, green
        }
        return obj;
        // return [red, blue, green];
    } else if (typeof input === "object") {
        red = (Object.entries(input)[0][1]).toString(16);
        blue = (Object.entries(input)[1][1]).toString(16);
        green = (Object.entries(input)[2][1]).toString(16);
        hex = red + blue + green;
        return '#' + hex.toUpperCase();
    }
}

console.log(convert([24, 95, 32]))
const obj = {
    red: 24,
    blue: 95,
    green: 32
}
console.log(convert(obj));
console.log(convert('#185F20'));

/*
Object.entries(obj).map(value => {
    return value[1] // second item in the array (Santa, Rudolf, Mr Grinch)
    + value[0].replace('username', ''); // first item in the array (username0, username1, username2)
})
*/
// console.log(Object.entries(obj)[0][1]);
// console.log(Object.entries([255,255,255]));