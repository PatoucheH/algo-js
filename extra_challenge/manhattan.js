
function manhattan(streetA, avenueA, streetB, avenueB){
    let distanceStreet = Math.abs(streetA - streetB)
    let distanceAvenue = Math.abs(avenueA - avenueB)
    return distanceStreet + distanceAvenue
}


console.log(manhattan(1, 1, 2, 2))

console.log(manhattan(1, 1, 1, 1))

console.log(manhattan(5, 4, 3, 2))