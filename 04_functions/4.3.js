import rand10 from "./4.2.js";
import promptSync from "prompt-sync";

const prompt = promptSync();

let n = prompt("Enter the size of the array that you want : ");
let arrayNumber = [];
/**
 *
 * @param {number} n -Size of the array
 * @returns The arrays with n number of random number
 * Create an array of n number of random number
 */
function multiRand(n) {
  for (let i = 0; i < n; i++) {
    let numToAdd = rand10();
    // console.log(numToAdd);
    arrayNumber.push(numToAdd);
  }
  return arrayNumber;
}

console.log(multiRand(n));
