import { jsonTvSerie } from "./5.1.js";
/**
 * 
 * @param {object} tvSerie object with the information about the favorite tv show of the users
 * @returns  the list of the cast members reversed
 */
export function randomizeCast(tvSerie) {
  let tvSerieObj = JSON.parse(jsonTvSerie);
  let randListOfCast = tvSerieObj.casting.slice().reverse();

  return randListOfCast;
}


console.log(randomizeCast())