// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const eachArray = []
array.forEach((obj) => {
  eachArray.push(obj.username+"!");
})

console.log(eachArray);

//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArray = array.map(obj => obj.username+"?");
console.log(mapArray);

//Filter the array to only include users who are on team: red

const filterArray = array.filter(obj => obj.team === "red");
console.log(filterArray);

//Find out the total score of all users using reduce

const totalScore = array.reduce((acc, obj) => {
  return acc + obj.score
}, 0);

console.log(totalScore);

// (1), what is the value of i? 
// (1 - Answer) Index of the Array i.e. 0,1,2,3,4,5. 
// (2), Make this map function pure:
// (2 - Answer) Commented out side effects below.

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
/* 	console.log(num, i);
	alert(num); */
	return num * 2;
})

console.log(newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const bonusArray = array.map(obj => {
  user = obj.username;
  team = obj.team;
  score = obj.score;
  items = obj.items;

  const bonusItems = items.map(str => str+"!");
  return {user, team, score, bonusItems}
})

console.log(bonusArray);

const answer = array.map(obj => {
  obj.items = obj.items.map(item => item +"!")
  return obj;  // because you want the whole array, you must return obj, cannot just obj => obj.items. so we return obj with the pre-applied modifications to obj.items.
})

console.log("answer is ", answer);

