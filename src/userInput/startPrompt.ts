import chalk from 'chalk';
import inquirer from 'inquirer';
import { handlePromptAnswer } from './handlePromptAnswer';
import { choices } from '../config/choices';

export const startPrompt = async () => {
  console.log(chalk.red('Please select an option:\n'));
  const choice = await inquirer.prompt({
    type: 'list',
    name: 'visualisation',
    message: 'Visualisations of native JavaScript methods and algorithms',
    choices: [choices.arrayPop],
  });
  handlePromptAnswer(choice.visualisation);
};
