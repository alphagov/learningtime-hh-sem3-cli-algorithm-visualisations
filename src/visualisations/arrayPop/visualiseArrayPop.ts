import { horizontalRule } from '../../utils/horizontalRule';
import { animatePop } from './animation/animatePop';
import { displayMetadata } from '../../utils/staticText/displayMetadata';
import { METADATA, EXAMPLE_ARRAY } from '../../config';
import { displayStaticArray } from '../../utils/staticText/displayStaticArray';

export const visualiseArrayPop = async () => {
  displayMetadata(METADATA.pop.method, METADATA.pop.description);
  horizontalRule();
  displayStaticArray(EXAMPLE_ARRAY);
  animatePop(EXAMPLE_ARRAY);
};
