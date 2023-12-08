import chalk from 'chalk';
import { ARRAY_ELEMENT_DEFAULT, SQUARE_BRACKET } from '../../config/index';
import { colouriseElements } from '../coulouriseElements';

export const displayStaticArray = (
  title: string,
  arr: number[],
  colour?: chalk.Chalk,
) => {
  const colouredTitle = colour ? colour(title) : chalk.dim(title);
  const colourisedElements = colouriseElements(arr, ARRAY_ELEMENT_DEFAULT);

  console.log(
    `${colouredTitle}  ${SQUARE_BRACKET(
      '[',
    )}${colourisedElements}${SQUARE_BRACKET(']')}\n`,
  );
};
