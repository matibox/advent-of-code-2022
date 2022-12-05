import fs from 'fs';

fs.readFile('./input.txt', 'utf-8', (err, data) => {
  const sectionPairs = data.split('\n');
  let fullyContainablePairs = 0;

  sectionPairs.forEach(pair => {
    const sections = pair.split(',');

    const first = sections[0].split('-');
    const second = sections[1].split('-');
    const [s1, e1] = first.map(Number);
    const [s2, e2] = second.map(Number);

    if ((s1 <= s2 && e2 <= e1) || (s2 <= s1 && e1 <= e2)) {
      fullyContainablePairs++;
    }
  });

  console.log(fullyContainablePairs);
});
