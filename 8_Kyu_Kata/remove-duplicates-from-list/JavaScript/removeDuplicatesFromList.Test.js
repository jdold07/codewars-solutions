// [object Object] - Remove duplicates from list  [ ID: 57a5b0dfcf1fa526bb000118  (remove-duplicates-from-list) ]
// URL: https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed tests", function() {
  it("should pass fixed tests", function() {
    assert.deepEqual(distinct([1]), [1]);
    assert.deepEqual(distinct([1,2]), [1,2]);
    assert.deepEqual(distinct([1,1,2]), [1,2]);
    assert.deepEqual(distinct([1,1,1,2,3,4,5]), [1,2,3,4,5]);
    assert.deepEqual(distinct([1,2,2,3,3,4,4,5,6,7,7,7]), [1,2,3,4,5,6,7]);
  });
});

describe("Random tests", function() {
  it("should pass random tests", function() {
  
    function random(max) {
      return Math.floor(Math.random() * max) + 1;
    }
  
    function generateRandomArr() {
      let length = random(50),
          arr = [];
      for (let i = 0; i < length; i++) {
        arr = arr.concat(new Array(random(50)).fill(random(5000000)));
      }
      arr.sort(() => Math.random() - 0.5);
      return arr;
    }
    
    function solution(arr) {
      return [...new Set(arr)];
    }
  
    for (let i = 0; i < 100; i++) {
      let arr = generateRandomArr(),
          expected = solution(arr);
      assert.deepEqual(distinct(arr.slice()), expected);
    }
  });
});
