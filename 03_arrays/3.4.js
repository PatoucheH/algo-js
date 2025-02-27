import promptSync from "prompt-sync";

const prompt = promptSync();

let input = prompt("Enter an array (separate by ',' or '.' : ");
let cleanInput = input.replace(/[\[\]]/g, "");
let array = cleanInput.split(/[,. ]/);
let cleanArray = array.filter((num) => num.trim() !== "");
let arrayNumber = cleanArray.map(Number);

console.log(arrayNumber);

const max = arrayNumber.reduce((a, b) => Math.max(a, b));
const min = arrayNumber.reduce((a, b) => Math.min(a, b));

console.log("Le maximum est " + max);
console.log("Le minimum est " + min);

console.log("Le minima est : " + Math.max(...arrayNumber));
console.log("Le maxima est : " + Math.min(...arrayNumber));
