import promptSync from "prompt-sync";

const prompt = promptSync();

let input = prompt("Enter an array of number (separate by '.' or ',') : ");

let cleanInput = input.replace(/[\[\]]/g, "")

let arraySplit = cleanInput.split(/[.,]/);
let arrayNumber = arraySplit.map(Number);
let total = 0;
console.log(arrayNumber);
for (let num of arrayNumber) {
  total += num;
}

total /= arrayNumber.length;

console.log(total);
