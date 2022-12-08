import fs from 'fs';
import stacks from './input.js';

fs.readFile('./input.txt', 'utf-8', (err, data) => {
  const [, instructionsStr] = data.split('\n\n');
  const instructions = instructionsStr.split('\n').map(instruction => {
    const [, quantity, , from, , to] = instruction.split(' ');
    return [quantity, from, to];
  });

  instructions.forEach(instruction => {
    let [quantity, from, to] = instruction;
    from--;
    to--;
    for (let i = 0; i < quantity; i++) {
      const removedItem = stacks[from].pop();
      stacks[to].push(removedItem);
    }
  });

  const topCrates = stacks.map(stack => stack[stack.length - 1]).join('');
  console.log(topCrates);
});
