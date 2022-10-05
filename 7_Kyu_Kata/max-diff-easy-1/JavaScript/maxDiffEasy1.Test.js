// [object Object] - max diff - easy  [ ID: 588a3c3ef0fbc9c8e1000095  (max-diff-easy-1) ]
// URL: https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095
// Category: REFERENCE  |  Tags: MATHEMATICS | LISTS | ARRAYS | FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Basic tests', function() {
  it("Test", () => {
    assert.strictEqual(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
    assert.strictEqual(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
    assert.strictEqual(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
    assert.strictEqual(maxDiff([16]), 0);
    assert.strictEqual(maxDiff([]), 0);
  })
});

function _maxDiff(list) {
  if(!list.length) return 0;
  return Math.max(...list) - Math.min(...list);
};

describe('Random tests', function() {
  it("Test", () => {
    for(let i = 0; i < 495; i++) {
      let n = ~~(Math.random() * 1000),
      list = Array.from({length: n}, _ => ~~(Math.random() * 1000 - 1000) );
      assert.deepEqual(maxDiff(list.slice()), _maxDiff(list), `Testing for [${list.join(", ")}]`);
    }    
  })
});
