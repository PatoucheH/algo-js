class Circle{
   constructor(xPos, yPos, radius){
    this.xPos = xPos
    this.yPos = yPos
    this.radius = radius
   }

   move(xOffset, yOffset){
    this.xPos += xOffset
    this.yPos += yOffset
   }

   get surface(){
    return Math.PI * (this.radius **2)
   }

}


// const c = new circle(50, 50, 10)

// console.log(c.surface)

// c.move(10,80)
// console.log(c.xPos,c.yPos)


// const c2 = new circle(100, 25, 50)

// console.log(c2.surface)

// c2.move(-50, 0 )
// console.log(c2.xPos, c2.yPos)