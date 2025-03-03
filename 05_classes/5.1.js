import promptSync from "prompt-sync";

const prompt = promptSync();

export function askTvSerie() {
  let name = prompt("Enter the name of your favorite TV serie : ");
  let productionYear;
  while (isNaN(productionYear)) {
    productionYear = prompt(
      "Enter the year of your serie begin to be product : "
    );
  }
  let cast = prompt("Enter the name of the cast member in your TV serie : ")
    .replace(/[\[\]]/g, "")
    .split(/[,.]/);
  //   console.log(name, productionYear, cast);

  const tvSerie = {
    name: name,
    yearOfProduction: productionYear,
    casting: cast,
  };
  return tvSerie;
}

// askTvSerie();

// console.log(askTvSerie())

// JSON.stringify(askTvSerie())

console.log(JSON.stringify(askTvSerie()));
