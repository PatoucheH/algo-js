const prompt = require("prompt-sync")();

let arrayToComplete = [];
let input = prompt("Enter an array of number (separate by '.' or ',') : ");
let cleanInput = input.replace(/[\[\]]/g, "");

console.log(cleanInput);

let cleanArray = cleanInput.split(/[., ]/);

for (let el of cleanArray) {
  console.log(el);
  arrayToComplete.push(el);
  arrayFinish = arrayToComplete.filter((el) => el.trim() !== "");
}

console.log(arrayFinish);

const arrayToComplete2 = [...cleanArray.filter((el) => el.trim() !== "")];

console.log(arrayToComplete2);
