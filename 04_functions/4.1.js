const prompt = require("prompt-sync")();
/**
 *
 * @param {number} length -Length of the quadrilateral
 * @param {number} width -Width of the quadrilateral
 * @returns {number}    - Perimeter of the quadrilateral
 */

function calcSurface(length, width) {
  return length + width;
}

length = Number(prompt("Please enter the length to calculate : "));
width = Number(prompt("Please enter the width to calculate : "));

// console.log(width);
// console.log(length);

console.log(calcSurface(length, width));
