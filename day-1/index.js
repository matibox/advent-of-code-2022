import fs from 'fs';

fs.readFile('./data.txt', 'utf-8', (err, data) => {
  const elfsArr = data
    .split('\n\n')
    .map(item => item.split('\n'))
    .map(arr => arr.map(item => parseInt(item)))
    .map(arr => arr.reduce((a, b) => a + b));

  // part 1
  console.log(elfsArr.reduce((a, b) => Math.max(a, b)));

  // part 2
  elfsArr.sort((a, b) => b - a);
  console.log(elfsArr.slice(0, 3).reduce((a, b) => a + b));
});
