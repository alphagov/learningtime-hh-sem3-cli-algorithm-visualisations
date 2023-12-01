import chalk from 'chalk';

export const displayMetadata = (method: string, description: string) => {
  console.log(`
  ${chalk.yellow.bold('Method:')} ${method}
  
  ${chalk.yellow.bold('Description:')} ${description}\n`);
};
