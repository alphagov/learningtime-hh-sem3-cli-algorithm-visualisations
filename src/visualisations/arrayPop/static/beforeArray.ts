import chalk from 'chalk';
import { ARRAY_ELEMENT, SQUARE_BRACKET } from '../../../config/index';

export const beforeArray = () => {
  console.log(
    `${chalk.dim('Before:')}  ${SQUARE_BRACKET('[')} ${ARRAY_ELEMENT(
      '1',
    )} , ${ARRAY_ELEMENT('2')} , ${ARRAY_ELEMENT('3')} , ${ARRAY_ELEMENT(
      '4',
    )} , ${ARRAY_ELEMENT('5')} ${SQUARE_BRACKET(']')}`,
  );
};
