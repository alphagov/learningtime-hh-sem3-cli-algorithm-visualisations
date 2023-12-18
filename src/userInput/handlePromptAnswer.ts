import { CHOICES } from '../config/index';
import { visualiseArrayPop } from '../visualisations/arrayPop/visualiseArrayPop';
import { visualiseBubblesort } from '../visualisations/bubblesort/visualiseBubblesort';

export const handlePromptAnswer = (choice: string) => {
  if (choice === CHOICES.pop) {
    visualiseArrayPop();
  } else if (choice === CHOICES.bubblesort) {
    visualiseBubblesort();
  }
};
