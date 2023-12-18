import chalk from 'chalk';

export const positionPointers = (j: number, colour: chalk.Chalk) => {
  const pointers = colour('      ^   ^');
  const spacingFactor = 4;
  return j === 0
    ? pointers
    : pointers.padStart(pointers.length + j * spacingFactor, ' ');
};
