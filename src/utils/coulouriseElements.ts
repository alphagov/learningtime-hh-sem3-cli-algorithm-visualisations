import chalk from 'chalk';

export const colouriseElements = (arr: number[], configColour: chalk.Chalk) => {
  return arr.map((num) => ` ${configColour(num)} `);
};
