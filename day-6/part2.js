import fs from 'fs';

fs.readFile('./input.txt', 'utf-8', (err, data) => {
  const datastream = data;
  const markerLength = 14;

  for (let i = 0; i < datastream.length; i++) {
    let character = i + markerLength;
    const marker = datastream.slice(i, character);
    if (marker.length !== markerLength) return;

    if (new Set(marker).size === marker.length) {
      console.log(character);
      break;
    }
  }
});
