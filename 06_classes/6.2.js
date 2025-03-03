class Rectangle {
  constructor(topLeftXPos, topLeftYPos, width, length) {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
  }
  collides(otherRectangle) {

    return !(
      this.topLeftXPos + this.width <= otherRectangle.topLeftXPos ||
      this.topLeftXPos >= otherRectangle.topLeftXPos + otherRectangle.width ||
      this.topLeftYPos - this.length >= otherRectangle.topLeftYPos ||
      this.topLeftYPos <= otherRectangle.topLeftYPos - otherRectangle.length 
    );
  }
}


let rect1 = new Rectangle(1, 3.5, 4, 2)
let rect2 = new Rectangle(5, 2, 2, 1)
let rect3 = new Rectangle(4,5, 2, 2)
let rect4 = new Rectangle(2, 2, 4, 2)
let rect5 = new Rectangle(2,6, 5,3)


// console.log(rect1.collides(rect2))
// console.log(rect1.collides(rect3))
// console.log(rect1.collides(rect4))
// console.log(rect3.collides(rect2))
// console.log(rect4.collides(rect2))
// console.log(rect2.collides(rect4))
// console.log(rect5.collides(rect2))
// console.log(rect5.collides(rect3))
// console.log(rect1.collides(rect5))

