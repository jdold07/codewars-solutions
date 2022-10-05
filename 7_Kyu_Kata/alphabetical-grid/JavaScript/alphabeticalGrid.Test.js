// [object Object] - Alphabetical Grid  [ ID: 60a94f1443f8730025d1744b  (alphabetical-grid) ]
// URL: https://www.codewars.com/kata/60a94f1443f8730025d1744b
// Category: ALGORITHMS  |  Tags: FUNDAMENTALS | ALGORITHMS
// *****************************************************************************
const chai = require('chai');
const assert = chai.assert;

function shuffle(a) {
  let i = a.length;
  while (i !== 0) {
    let r = Math.floor(Math.random() * i);
    i -= 1;
    let tmp = a[i];
    a[i] = a[r];
    a[r] = tmp;
  }
}

const sol = N => N < 0 ? null : Array.from(Array(N),(_,y)=>Array.from(Array(N),(_,x)=>'abcdefghijklmnopqrstuvwxyz'[(x+y)%26]).join(' ')).join('\n');

describe('Basic Tests', function() {
  it('Tests for 0-50', function() {
    for (let i = 0; i < 51; i++) {
      let res = sol(i);
      assert.strictEqual(grid(i), res);
    }
  });
});

describe('Random Tests', function() {
  it('Random tests', function() {
    let randomTests = [...Array(126).keys()].map(x=>x-25)
    shuffle(randomTests)
    for (let r of randomTests) {
      let res = sol(r);
      assert.strictEqual(grid(r), res);
    }
  });
});
