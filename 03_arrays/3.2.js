const prompt = require("prompt-sync")();

let input = prompt("Enter an array of number (separate by '.' or ',') : ");
let arraySplit = input.split(/[.,]/);
let arrayNumber = arraySplit.map(Number);
let total = 0;
console.log(arrayNumber);
for (let num of arrayNumber) {
  total += num;
}

total /= arrayNumber.length;

console.log(total);
