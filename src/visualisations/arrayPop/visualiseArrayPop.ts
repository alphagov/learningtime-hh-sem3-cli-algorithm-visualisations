import { arrayPopInfo } from './static/arrayPopInfo';
import { horizontalRule } from '../../utils/horizontalRule';
import { beforeArray } from './static/beforeArray';
import { animatePop } from './animation/animatePop';

export const visualiseArrayPop = async () => {
  arrayPopInfo();
  horizontalRule();
  beforeArray();
  animatePop();
};
