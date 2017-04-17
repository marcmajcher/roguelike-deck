'use strict';

const lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('cards.csv')
});

const lineLength = 23;

lineReader.on('line', function(line) {
  let bits = line.split(',');
  bits[1] = padline(bits[1], lineLength);
  bits[2] = padline(bits[2], lineLength);
  console.log(bits.join(','));
});

function padline(str, len) {
  while (str.length < len) {
    str = `.${str}.`;
  }
  return str.slice(0, len);
}
