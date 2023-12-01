import chalk from 'chalk';
import { SQUARE_BRACKET } from '../../../../config/index';

export const prePopArray = () => {
  console.log(`
${chalk.green('After:')}   ${SQUARE_BRACKET('[')} ${chalk.green(
    '1',
  )} , ${chalk.green('2')} , ${chalk.green('3')} , ${chalk.green(
    '4',
  )} , ${chalk.red(5)} ${SQUARE_BRACKET(']')}${chalk.red(`
                          /\\
                         /||\\
                          ||
                          ||
`)}
`);
};
