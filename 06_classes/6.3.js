import { Rectangle } from "./6.2.js";

let rectangles = {};


for (let i = 0; i < 100; i++) {
  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let width = Math.random() * 100;
  let length = Math.random() * 100;

  rectangles[`rect${i}`] = new Rectangle(x, y, width, length);
}

// console.log(rectangles)

let arrayRectangles = Object.values(rectangles);

for (let i = 0; i < arrayRectangles.length; i++) {
  for (let a = i + 1; a < arrayRectangles.length; a++) {
    if (arrayRectangles[i].collides(arrayRectangles[a])) {
      console.log(`Rectangle ${i} collides with rectangle ${a}.`);
    }
  }
}
