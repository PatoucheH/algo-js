let moneyChange = [];
let totalCount = 0;

const availableMoney = [
  500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
];

/**
 *
 * @param {Number} moneyHanded Money given to pay
 * @param {Number} price Price to pay
 * @returns an array with all the banknotes or coin to give back
 */
function computeChange(moneyHanded, price) {
  if (
    isNaN(moneyHanded) ||
    isNaN(price) ||
    moneyHanded < 0 ||
    price < 0 ||
    moneyHanded < price
  ) {
    return moneyChange;
  } else {
    let difference = moneyHanded - price;
    availableMoney.forEach((element) => {
      while (element <= difference) {
        difference -= element;
        moneyChange.push(element);
      }
    });
    return moneyChange;
  }
}

let arrayOfMoneyToChange = computeChange(100, 10);

arrayOfMoneyToChange.forEach((element) => {
  totalCount += element;
});

// console.log(computeChange(100, 10));

console.log(arrayOfMoneyToChange);

console.log(
  `The exchange rate is ${totalCount.toFixed(
    2
  )} and you can easily give back it by giving this money ${arrayOfMoneyToChange}.`
);
