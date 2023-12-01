import { GREEN, RED, SQUARE_BRACKET } from '../../../../config/index';
import { colouriseElements } from '../../../../utils/coulouriseElements';

export const prePopArray = (arr: number[]) => {
  const unchangedArrElements = arr.slice(0, -1);
  const poppedArrElement = arr.at(-1);

  const colourisedUnchangedArrElements = colouriseElements(
    unchangedArrElements,
    GREEN,
  );

  console.log(`
${GREEN('After:')}   ${SQUARE_BRACKET(
    '[',
  )}${colourisedUnchangedArrElements}, ${RED(
    poppedArrElement,
  )} ${SQUARE_BRACKET(']')}${RED(`
                          /\\
                         /||\\
                          ||
                          ||
`)}
`);
};
