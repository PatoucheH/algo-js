const prompt = require("prompt-sync")();

let n = Number(
  prompt("Enter a number to choose the number of number to add : ")
);
let total = 0;
let num;

while (isNaN(n)) {
  n = Number(prompt("Enter a number to choose the number of number to add : "));
}

for (i = 0; i < n; i++) {
  num = Number(prompt("Enter a number to add : "));
  total += num;
}

console.log(total);
