import chalk from 'chalk';

export const SQUARE_BRACKET = chalk.hex('#da70d6');
export const ARRAY_ELEMENT_DEFAULT = chalk.hex('#b5cea8');
export const GREEN = chalk.hex('#00FF00');
export const RED = chalk.hex('#FF0000');

export const EXAMPLE_ARRAY = [1, 2, 3, 4, 5];

export const CHOICES = {
  pop: '.pop()',
  bubblesort: 'bubblesort',
};

export const METADATA = {
  pop: {
    method: '.pop()',
    description:
      'It removes the last element from an array and returns the removed element. It changes the length of the original array.',
  },
};
