'use strict';
const art = require('ascii-art');

const styles = ['variant1', 'variant2', 'variant3', 'variant4',
  'ultra-wide', 'wide', 'hatching'
];

styles.forEach(style => {

  var image = new art.Image({
    filepath: './01_Magician_bw.png',
    alphabet: style,
    width: 17,
    height: 23
  });

  image.write(function(err, rendered) {
    console.log(rendered);
    console.log('===================');
  });

});
