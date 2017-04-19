'use strict';
const art = require('ascii-art');

var image = new art.Image({
  filepath: './01_Magician.jpg',
  alphabet: 'greyscale',
  width: 17,
  height: 23
});
image.write(function(err, rendered) {
  console.log(rendered);
})
