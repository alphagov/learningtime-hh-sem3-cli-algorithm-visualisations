import chalk from 'chalk';
import { GREEN, RED } from '../../../config';

type ColourisingHandler = (
  arr: number[],
  j: number,
  colour: chalk.Chalk,
) => Promise<void>;

export const animateBubblesort = async (
  arr: number[],
  colourisingHandler: ColourisingHandler,
) => {
  let i, j;
  const len = arr.length;

  let isSwapped = false;
  for (i = 0; i < len; i++) {
    isSwapped = false;

    for (j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
        await colourisingHandler(arr, j, GREEN);
      } else if (arr[j] < arr[j + 1] && arr[j + 1]) {
        await colourisingHandler(arr, j, RED);
      }
    }

    // IF no two elements were swapped
    // by inner loop, then break
    if (!isSwapped) {
      break;
    }
  }
};
