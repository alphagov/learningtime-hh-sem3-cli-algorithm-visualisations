import chalk from 'chalk';
import {
  ARRAY_ELEMENT_DEFAULT,
  SQUARE_BRACKET,
} from '../../../../../config/index';

export const createArrayFrame = (
  arr: number[] | string[],
  j: number,
  colour: chalk.Chalk,
) => {
  const j0Coloured = ` ${colour(arr[j])} `;
  const j1Coloured = ` ${colour(arr[j + 1])} `;

  // filter out numbers not being swapped and apply default colouring to them
  const nonSwappedArr = arr
    .filter((_, i) => {
      return !(i === j || i === j + 1);
    })
    .map((num) => ` ${ARRAY_ELEMENT_DEFAULT(num)} `);

  // could refactor, splice back in the swapped elements with coloring into the array
  nonSwappedArr.splice(j, 0, j0Coloured);
  nonSwappedArr.splice(j + 1, 0, j1Coloured);

  // construct the final array to log
  const finalArr = `${SQUARE_BRACKET('[')}${nonSwappedArr}${SQUARE_BRACKET(
    ']',
  )}`;

  return finalArr;
};
