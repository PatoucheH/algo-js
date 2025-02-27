import promptSync from "prompt-sync";

const prompt = promptSync();

let arrayToComplete = [];
let input = prompt("Enter an array of number (separate by '.' or ',') : ");
let cleanInput = input.replace(/[\[\]]/g, "");

console.log(cleanInput);

let cleanArray = cleanInput.split(/[., ]/);
let arrayFinish;

for (let el of cleanArray) {
  console.log(el);
  arrayToComplete.push(el);
  arrayFinish = arrayToComplete.filter((el) => el.trim() !== "");
}

console.log(arrayFinish);

const arrayToComplete2 = [...cleanArray.filter((el) => el.trim() !== "")];

console.log(arrayToComplete2);
