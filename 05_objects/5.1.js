import promptSync from "prompt-sync";

const prompt = promptSync();
/**
 * ask to the user to enter the name, the year or production and the members of his favorite Tv shows
 * @returns an object with these informations
 */
export function askTvSerie() {
  let name = prompt("Enter the name of your favorite TV serie : ");
  let productionYear;
  let cast = [];
  let input;
  while (isNaN(productionYear)) {
    productionYear = prompt(
      "Enter the year of your serie begin to be product : "
    );
  }

  do {
    input = prompt(
      "Enter the name of the cast of your TV show (Add one name or more separate by ',' ) exit the program by pressing enter an empty entry : "
    );

    cast
      .push(...input.replace(/[\[\]]/g, "").split(/[,.]/)
      .filter((name) => name.length > 0));
  } while (input !== "");
  //   console.log(name, productionYear, cast);

  const tvSerie = {
    name: name,
    yearOfProduction: productionYear,
    casting: cast,
  };
  return tvSerie;
}

// console.log(askTvSerie())

let tvSerie = askTvSerie();

export let jsonTvSerie = JSON.stringify(tvSerie);

console.log(jsonTvSerie);
