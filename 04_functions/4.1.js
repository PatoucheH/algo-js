import promptSync from "prompt-sync";

const prompt = promptSync();
/**
 *
 * @param {number} length -Length of the quadrilateral
 * @param {number} width -Width of the quadrilateral
 * @returns {number}    - Perimeter of the quadrilateral
 */

function calcSurface(length, width) {
  return length + width;
}

let length = Number(prompt("Please enter the length to calculate : "));
let width = Number(prompt("Please enter the width to calculate : "));

// console.log(width);
// console.log(length);

console.log(calcSurface(length, width));
