import promptSync from "prompt-sync";

const prompt = promptSync();

/**
 *
 * @param {Number} Ax -First arguments position of A on x axis
 * @param {Number} Ay -Second arguments position of B on y axis
 * @param {Number} Bx -Third arguments position of A on x axis
 * @param {Number} By -Fourth arguments position of B on y axis
 * @returns return the distance between the two points A --> B
 */
function calcDistance(Ax, Ay, Bx, By) {
  let result = Math.sqrt(Math.pow(Bx - Ax, 2) + Math.pow(By - Ay, 2));
  return Math.trunc(result * 100) / 100;
}

console.log(calcDistance(1, 1, 2, 2));
console.log(calcDistance(1, 1, 3, 1));
console.log(calcDistance(4, 1, 1, 1));
console.log(calcDistance(-2, 2, 2, -2));

let Ax = prompt("Enter the position of A on x axis : ");

let Ay = prompt("Enter the position of A on y axis : ");

let Bx = prompt("Enter the position of B on x axis : ");

let By = prompt("Enter the position of B on y axis : ");

console.log(calcDistance(Ax, Ay, Bx, By));
