import { horizontalRule } from '../../utils/horizontalRule';
import { animatePop } from './animation/animatePop';
import { displayMetadata } from '../../utils/staticText/displayMetadata';
import { METADATA, ASCENDING_ARRAY, BEFORE_TITLE } from '../../config';
import { displayStaticArray } from '../../utils/staticText/displayStaticArray';

export const visualiseArrayPop = async () => {
  displayMetadata(METADATA.pop.method, METADATA.pop.description);
  horizontalRule();
  displayStaticArray(BEFORE_TITLE, ASCENDING_ARRAY);
  animatePop(ASCENDING_ARRAY);
};
