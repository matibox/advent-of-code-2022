import fs from 'fs';

const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
  ''
);

fs.readFile('./input.txt', 'utf-8', (err, data) => {
  const rucksacks = data.split('\n');
  let prioritySum = 0;

  for (let i = 0; i < rucksacks.length; i += 3) {
    const [first, second, third] = rucksacks
      .slice(i, i + 3)
      .map(rucksack => [...rucksack]);

    const commonItem = first.find(
      item => second.includes(item) && third.includes(item)
    );

    prioritySum += letters.indexOf(commonItem) + 1;
  }

  console.log(prioritySum);
});
