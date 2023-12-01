import chalk from 'chalk';
import { SQUARE_BRACKET } from '../../../../config/index';

export const postPopArray = () => {
  console.log(`
${chalk.green('After:')}   ${SQUARE_BRACKET('[')} ${chalk.green(
    '1',
  )} , ${chalk.green('2')} , ${chalk.green('3')} , ${chalk.green(
    '4',
  )} ${SQUARE_BRACKET(']')}





`);
};
