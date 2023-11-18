import chalk from 'chalk';

export const arrayPopInfo = () => {
  console.log(`
  ${chalk.yellow.bold('Method:')} .pop() removes the last element from an array.
  
  ${chalk.yellow.bold(
    'Description:',
  )} It returns the removed element and changes the length of the original array.\n`);
};
