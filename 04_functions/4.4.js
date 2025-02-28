import promptSync from "prompt-sync";

const prompt = promptSync();

let numberChoose = 0;
let cleanArray = [];

function pickLearner(inputAr, n) {
  while (numberChoose <= 0 || isNaN(numberChoose)) {
    numberChoose = Number(
      prompt("Enter a number to choose the number to learner to pick : ")
    );
  }

  let input = prompt("Enter an array of learner : ");
  let array = input.replace(/[\[\]]/g, "").split(/[., ]/);
  cleanArray = array.filter((name) => name.trim() !== "");

  // console.log(cleanArray);

  let resultArray = [];

  for (let i = 0; i < numberChoose; i++) {
    let randomNumber = Math.floor(Math.random() * cleanArray.length);

    resultArray.push(cleanArray[randomNumber]);
  }
  // console.log(resultArray);
  return resultArray;
}

console.log(pickLearner(cleanArray, numberChoose));
