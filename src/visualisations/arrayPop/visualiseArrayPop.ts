import { horizontalRule } from '../../utils/horizontalRule';
import { beforeArray } from './static/beforeArray';
import { animatePop } from './animation/animatePop';
import { displayMetadata } from '../../utils/staticText/displayMetadata';
import { METADATA } from '../../config';

export const visualiseArrayPop = async () => {
  displayMetadata(METADATA.pop.method, METADATA.pop.description);
  horizontalRule();
  beforeArray();
  animatePop();
};
