import chalk from 'chalk';

export const SQUARE_BRACKET = chalk.hex('#da70d6');
export const ARRAY_ELEMENT_DEFAULT = chalk.hex('#b5cea8');
export const GREEN = chalk.hex('#00FF00');
export const RED = chalk.hex('#FF0000');

export const BEFORE_TITLE = 'Before:';
export const AFTER_TITLE = 'After: ';

export const ASCENDING_ARRAY = [1, 2, 3, 4, 5];
export const DESCENDING_ARRAY = [5, 4, 3, 2, 1];

export const ANIMATION_SLEEP = 1500;

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
  bubblesort: {
    method: 'bubblesort',
    description:
      'Sorts an array by repeatedly steps through the input array element by element, comparing the current element with the one after it, swapping their values if needed',
  },
};
