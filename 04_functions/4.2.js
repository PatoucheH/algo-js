/**
 *
 * @param {number} min -Minimum
 * @param {number} max -Maximum
 * @returns -Return a number between 1 and 10
 * Generates a number between 0 and 1 multiplicate it by 10 then round up
 */

export default function rand10(min, max) {
  let num = Math.floor(Math.random() * 10);

  return num;
}

// console.log(rand10());
