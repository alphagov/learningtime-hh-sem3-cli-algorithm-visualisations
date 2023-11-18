import { clearAboveLines } from '../../../utils/clearAboveLines';
import { prePopArray } from './frames/prePopArray';
import { postPopArray } from './frames/postPopArray';

export const animatePop = async () => {
  prePopArray();
  await clearAboveLines(8, 2000);
  postPopArray();
  await clearAboveLines(8, 2000);
  animatePop();
};
