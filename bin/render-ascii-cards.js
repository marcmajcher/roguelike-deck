'use strict';

const art = require('ascii-art');
const fs = require('fs');

art.valueScales.nethack = '@#$]/!:*=+,. '.split('');

const imgDir = 'rw-images-bw';
const outDir = 'rw-ascii';
// const separator = '=================';
const styles = [
  // 'variant1',
  // 'variant2',
  // 'variant3',
  // 'variant4',
  // 'ultra-wide',
  // 'wide',
  // 'hatching'
  'nethack'
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
        width: 23,
        height: 48
      });

      image.write(function(err, rendered) {
        rendered = rendered.replace(/\u001b/g, '');
        rendered = rendered.replace(/\[30m./g, ' ');
        rendered = rendered.replace(/\[\d+m/g, '');
        outStream.write(rendered); // + `${separator}:${style}\n`);
      });
    });
  });
});
