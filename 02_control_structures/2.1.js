const prompt = require("prompt-sync")();

let age = Number(prompt("Please enter your age : "));

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not yet an adult.");
}
