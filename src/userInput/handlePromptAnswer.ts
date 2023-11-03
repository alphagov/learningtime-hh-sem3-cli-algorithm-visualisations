import { choices } from '../config/choices';
import { visualiseArrayPop } from '../visualisations/visualiseArrayPop';

export const handlePromptAnswer = (choice: string) => {
  if (choice === choices.arrayPop) visualiseArrayPop();
};
