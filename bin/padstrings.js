'use strict';

const lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('cards.csv')
});

let header = true;
const lineLength = 23;
const lineHeight = 15;

lineReader.on('line', function(line) {
  if (header) {
    let headerString = 'id,value,name,danger,place,L1,L2,L3,L4';

    for (let i = 0; i < lineHeight; i++) {
      headerString += `,D${i+1}`;
    }
    for (let i = 0; i < lineHeight; i++) {
      headerString += `,P${i+1}`;
    }
    console.log(headerString);
    header = false;
  }
  else {
    let bits = line.split(',');
    bits[1] = padline(bits[1], lineLength);
    bits[2] = padline(bits[2], lineLength);

    let danger = padline(bits[3], lineHeight).split('');
    let place = padline(bits[4], lineHeight).split('');
    bits = bits.concat(danger);
    bits = bits.concat(place);

    console.log(bits.join(','));
  }
});

function padline(str, len) {
  str = str.replace(/ /g, '.');
  while (str.length < len) {
    str = `.${str}.`;
  }
  return str.slice(0, len);
}