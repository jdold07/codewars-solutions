// 7 kyu - Folding your way to the moon  [ ID: 58f0ba42e89aa6158400000e  (folding-your-way-to-the-moon) ]
// URL: https://www.codewars.com/kata/58f0ba42e89aa6158400000e
// Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
const assert = require("chai").assert;

describe('foldTo', function() {
  it('Example test cases', function() {
    assert.strictEqual(foldTo(384000000),42);
    assert.strictEqual(foldTo(0.0000001),0);
    assert.strictEqual(foldTo(0),0);
    assert.strictEqual(foldTo(-1),null);
  });
  function _foldTo(distance) { // do not work in some languages
    return distance<0?null:Math.max(Math.ceil(Math.log2(distance/0.0001)),0);
  }
  function _foldTo2(distance) {
    if(distance<0)return null;
    let c = 0;
    for(let d = 0.0001;d<distance;c++)d*=2;
    return c;
  }
  it('Random test cases', function() {
    for(let i=0; i<100; i++) {
      let distance, rnd = Math.random();
      if(rnd<0.1)distance=0;
      else distance = 0.0001*Math.pow(2,Math.random()*(128+22)-22);
      if(rnd>0.9)distance*=-1;
      console.log(`distance: ${distance}m`);
      assert.strictEqual(foldTo(distance),_foldTo2(distance));
    }
  });
});
