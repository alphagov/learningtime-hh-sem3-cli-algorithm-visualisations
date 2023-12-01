import { GREEN, SQUARE_BRACKET } from '../../../../config/index';
import { colouriseElements } from '../../../../utils/coulouriseElements';

export const postPopArray = (arr: number[]) => {
  const unchangedArrElements = arr.slice(0, -1);
  const colourisedUnchangedArrElements = colouriseElements(
    unchangedArrElements,
    GREEN,
  );

  console.log(`
${GREEN('After:')}   ${SQUARE_BRACKET(
    '[',
  )}${colourisedUnchangedArrElements}${SQUARE_BRACKET(']')}





`);
};
