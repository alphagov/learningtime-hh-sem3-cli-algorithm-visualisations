import chalk from 'chalk';
import { ANIMATION_SLEEP, GREEN } from '../../../../config';
import { clearAboveLines } from '../../../../utils/clearAboveLines';
import { createArrayFrame } from './helpers/createArrayFrame';
import { positionPointers } from './helpers/positionPointers';

export const coulouriseIndices = async (
  arr: number[],
  j: number,
  colour: chalk.Chalk,
) => {
  await clearAboveLines(2, ANIMATION_SLEEP);
  console.log(
    `${GREEN('After:')}   ${createArrayFrame(arr, j, colour)}
     ${positionPointers(j, colour)}`,
  );
};
