import chalk from 'chalk';
import { ARRAY_ELEMENT, SQUARE_BRACKET } from '../../config/index';

export const displayStaticArray = (arr: number[]) => {
  const colourisedElements = arr.map((num) => {
    return ` ${ARRAY_ELEMENT(num.toString())} `;
  });

  console.log(
    `${chalk.dim('Before:')}  ${SQUARE_BRACKET(
      '[',
    )}${colourisedElements}${SQUARE_BRACKET(']')}`,
  );
};
