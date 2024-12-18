'use strict';

const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let larr = [];

for (let i = 0; i < 3; i++) {
  larr = larr.concat(abc.split(''));
}

while (larr.length > 0) {
  let lobj = {};
  let letters = [];

  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * larr.length);
    letters.push(index);
    lobj[larr[index].toUpperCase()] = 1;
  }

  if (Object.keys(lobj).length === 4) {
    let lout = letters.map(e => larr[e]);
    letters.sort((a, b) => b - a).forEach(e => {
      larr.splice(e, 1);
    });
    console.log(lout.join(','));
  }
}
