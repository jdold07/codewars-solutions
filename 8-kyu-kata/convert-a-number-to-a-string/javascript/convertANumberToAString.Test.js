// 8 kyu - Convert a Number to a String!  [ ID: 5265326f5fda8eb1160004c8  (convert-a-number-to-a-string) ]
// URL: https://www.codewars.com/kata/5265326f5fda8eb1160004c8
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const assert = require('chai').assert;
describe("Tests", () => {
  it("fixed tests", () => {
    assert.strictEqual(numberToString(67), '67');
    assert.strictEqual(numberToString(79585), '79585');
    assert.notStrictEqual(numberToString(79585), 79585);
    assert.strictEqual(numberToString(1+2), '3');
    assert.strictEqual(numberToString(1-2), '-1');
  });
  
  it("random tests", () => {
    for (let run = 0; run < 200; ++run) {
      let num = Math.floor(Math.random() * 2000000 - 1000000);
      assert.strictEqual(numberToString(num), String(num), `Testing for num = ${num}`);
    }
  });
});

