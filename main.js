'use strict';

var Nightmare = require('nightmare');
var nightmare = Nightmare();

Promise.resolve(
  nightmare.goto('http://www.yuiyuimakino.com/news/').evaluate(() => {
    let entries = document.querySelectorAll('.txt');
    let texts = [];
    for(let i=0; i< entries.length; i++) {
      texts.push(entries[i].textContent);
    }
    return texts;
  })
).then((result) => {
  console.log(result);
}).catch(console.error);

nightmare.end();
