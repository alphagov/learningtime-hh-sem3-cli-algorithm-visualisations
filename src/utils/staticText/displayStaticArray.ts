import chalk from 'chalk';
import { ARRAY_ELEMENT_DEFAULT, SQUARE_BRACKET } from '../../config/index';
import { colouriseElements } from '../coulouriseElements';

export const displayStaticArray = (arr: number[]) => {
  const colourisedElements = colouriseElements(arr, ARRAY_ELEMENT_DEFAULT);

  console.log(
    `${chalk.dim('Before:')}  ${SQUARE_BRACKET(
      '[',
    )}${colourisedElements}${SQUARE_BRACKET(']')}`,
  );
};
