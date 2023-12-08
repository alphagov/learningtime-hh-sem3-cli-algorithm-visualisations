import { CHOICES } from '../config/index';
import { visualiseArrayPop } from '../visualisations/arrayPop/visualiseArrayPop';

export const handlePromptAnswer = (choice: string) => {
  if (choice === CHOICES.pop) {
    visualiseArrayPop();
  }
};
