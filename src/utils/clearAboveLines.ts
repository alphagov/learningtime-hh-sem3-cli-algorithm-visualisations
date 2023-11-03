import readline from 'readline';
import { sleep } from './sleep';

export const clearAboveLines = async (lines: number, delay: number) => {
  const clearLine = () => readline.clearLine(process.stdout, 0);
  const moveCursor = () => readline.moveCursor(process.stdout, 0, -1);

  await sleep(delay);
  for (let i = 0; i < lines; i++) {
    clearLine();
    moveCursor();
  }
};
