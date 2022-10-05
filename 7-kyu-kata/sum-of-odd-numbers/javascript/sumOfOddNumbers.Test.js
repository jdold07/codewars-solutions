// 7 kyu - Sum of odd numbers  [ ID: 55fd2d567d94ac3bc9000064  (sum-of-odd-numbers) ]
// URL: https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
// Category: REFERENCE  |  Tags: ARRAYS | LISTS | MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });
});


describe("Tests", () => {

  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  it("Testing for 50 random tests", () => {
    for (let i = 0; i < 50; i ++) {
      const n = randint(1, 501);
      assert.strictEqual(rowSumOddNumbers(n), Math.pow(n, 3), `Testing for n = ${n}`); 
    }
  });
});

