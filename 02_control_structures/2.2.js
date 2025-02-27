const prompt = require('prompt-sync')();

let min = Number(prompt("Entrez un minimum : "));
let max = Number(prompt("Entrez un maximum : "));

if (min >= max) {
  console.log(
    "le nombre minimum choisi : " +
      min +
      " doit être plus petit que le nombre maximum choisi : " +
      max
  );
} else {
  let current = Number(prompt("Entrez un nombre actuel : "));

  if (current > min && current < max) {
    console.log(
      "Le nombre : " +
        current +
        " est plus grand que " +
        min +
        " et plus petit que " +
        max +
        "."
    );
  } else {
    console.log(
      "Le nombre choisi n'est pas compris entre le maximum et le minimum choix."
    );
  }
}
