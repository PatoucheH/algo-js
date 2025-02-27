import promptSync from "prompt-sync";

const prompt = promptSync();
let numberOfWeek = 0;

while (isNaN(numberOfWeek) || numberOfWeek < 1 || numberOfWeek > 7) {
  numberOfWeek = Number(prompt("Please enter a number between 1 and 7 : "));
}

// if (numberOfWeek === 1) {
//   console.log("Monday");
// } else if (numberOfWeek === 2) {
//   console.log("Tuesday");
// } else if (numberOfWeek === 3) {
//   console.log("Wednesday");
// } else if (numberOfWeek === 4) {
//   console.log("Thursday");
// } else if (numberOfWeek === 5) {
//   console.log("Friday");
// } else if (numberOfWeek === 6) {
//   console.log("Saturday");
// } else if (numberOfWeek === 7) {
//   console.log("Sunday");
// }

switch (numberOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}
