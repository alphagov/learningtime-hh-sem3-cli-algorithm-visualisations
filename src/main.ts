import chalk from 'chalk';
import inquirer from 'inquirer';

const main = async () => {
  await startPrompt();
};

const startPrompt = async () => {
  console.log(chalk.red('hello from chalk\n'));
  await inquirer.prompt({
    type: 'list',
    name: 'trick',
    message: 'Some choices',
    choices: [
      `${chalk.green('Choice 1')}`,
      `${chalk.yellow('Choice 2')}`,
      `${chalk.blue('Choice 3')}`,
    ],
  });
};

main();
