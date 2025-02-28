import promptSync from "prompt-sync";

const prompt = promptSync();

function factorial(a) {
  if (a === 0 || a === 1) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}

// console.log(factorial(5));

let numberChoose = Number(prompt("Enter a number to receive his factorial : "));

console.log(factorial(numberChoose));
