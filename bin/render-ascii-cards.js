'use strict';

const art = require('ascii-art');
const fs = require('fs');

const imgDir = 'rw-images-bw';
const outDir = 'rw-ascii';
// const separator = '=================';
const styles = [
  // 'variant1',
  'variant2',
  // 'variant3',
  // 'variant4',
  // 'ultra-wide',
  // 'wide',
  // 'hatching'
];

fs.readdir(imgDir, (err, files) => {
  files.forEach(file => {
    const outFile = `${outDir}/${file}`.replace(/\.png$/, '.txt');
    const outStream = fs.createWriteStream(outFile);
    // outStream.write(`${separator}\n`);

    styles.forEach(style => {
      var image = new art.Image({
        filepath: `${imgDir}/${file}`,
        alphabet: style,
        width: 17,
        height: 23
      });

      image.write(function(err, rendered) {
        outStream.write(rendered.replace(/\[\d+m/g, '')); // + `${separator}:${style}\n`);
      });
    });
  });
});
