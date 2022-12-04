import fs from 'fs';

// A - rock 1
// B - paper 2
// C - scissors 3

// X - rock 1
// Y - paper 2
// Z - scissors 3

// 0 L 3 D 6 W

const determineScore = ([elfShape, userShape]) => {
  if (elfShape === 'A' && userShape === 'Z') return 0;
  if (elfShape === 'A' && userShape === 'X') return 3;
  if (elfShape === 'A' && userShape === 'Y') return 6;

  if (elfShape === 'B' && userShape === 'X') return 0;
  if (elfShape === 'B' && userShape === 'Y') return 3;
  if (elfShape === 'B' && userShape === 'Z') return 6;

  if (elfShape === 'C' && userShape === 'Y') return 0;
  if (elfShape === 'C' && userShape === 'Z') return 3;
  if (elfShape === 'C' && userShape === 'X') return 6;
};

const determineShapeScore = shape => {
  if (shape === 'X') return 1;
  if (shape === 'Y') return 2;
  if (shape === 'Z') return 3;
};

fs.readFile('./input.txt', { encoding: 'utf-8' }, (err, data) => {
  const rounds = data.split('\n').map(round => round.split(' '));
  rounds.pop();
  let score = 0;
  rounds.forEach(round => {
    const roundScore = determineScore(round);
    const shapeScore = determineShapeScore(round[1]);
    score = score + roundScore + shapeScore;
  });
  console.log(score);
});
