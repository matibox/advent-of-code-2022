import fs from 'fs';

const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
  ''
);

fs.readFile('./input.txt', 'utf-8', (err, data) => {
  const rucksacks = data.split('\n');
  let prioritySum = 0;
  rucksacks.forEach(rucksack => {
    const firstPart = [...rucksack].slice(0, rucksack.length / 2);
    const secondPart = [...rucksack].slice(rucksack.length / 2);
    const commonItem = firstPart.find(item => secondPart.includes(item));
    prioritySum += letters.indexOf(commonItem) + 1;
  });
  console.log(prioritySum);
});
