const prompt = require("prompt-sync")();

let input = prompt("Enter an array of number (separate by ',' or '.'): ");
// console.log(input);
let cleanInput = input.replace(/[\[\]]/g, "");
let arraySplit = cleanInput.split(/[,. ]/);
let arrayNumber = arraySplit.map(Number);
let total = 0;
// console.log(arrayNumber);

for (let num of arrayNumber) {
  //   console.log("the number = " + num);
  total += num;
}
console.log(total);
