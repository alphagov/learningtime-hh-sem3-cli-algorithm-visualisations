import { clearAboveLines } from '../../../utils/clearAboveLines';
import { prePopArray } from './frames/prePopArray';
import { postPopArray } from './frames/postPopArray';

export const animatePop = async (arr: number[]) => {
  prePopArray(arr);
  await clearAboveLines(8, 2000);
  postPopArray(arr);
  await clearAboveLines(8, 2000);
  animatePop(arr);
};
