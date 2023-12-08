import { animateBubblesort } from './animation/animateBubblesort';
import { horizontalRule } from '../../utils/horizontalRule';
import { displayMetadata } from '../../utils/staticText/displayMetadata';
import {
  AFTER_TITLE,
  BEFORE_TITLE,
  DESCENDING_ARRAY,
  GREEN,
  METADATA,
} from '../../config';
import { displayStaticArray } from '../../utils/staticText/displayStaticArray';

export const visualiseBubblesort = () => {
  displayMetadata(METADATA.bubblesort.method, METADATA.bubblesort.description);
  horizontalRule();
  displayStaticArray(BEFORE_TITLE, DESCENDING_ARRAY);
  displayStaticArray(AFTER_TITLE, DESCENDING_ARRAY, GREEN);
  animateBubblesort(DESCENDING_ARRAY);
};
