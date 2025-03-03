import { jsonTvSerie } from "./5.1.js";

export function randomizeCast(tvSerie) {
  let tvSerieObj = JSON.parse(jsonTvSerie);
  let randListOfCast = tvSerieObj.casting.slice().reverse();

  return randListOfCast;
}


console.log(randomizeCast())