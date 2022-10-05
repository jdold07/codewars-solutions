// 7 kyu - Incrementer  [ ID: 590e03aef55cab099a0002e8  (incrementer) ]
// URL: https://www.codewars.com/kata/590e03aef55cab099a0002e8
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const { assert } = require("chai");

describe("Basic Tests", function() {
  it("Testing for []", () => assert.deepEqual(incrementer([]), []));
  it("Testing for [1, 2, 3]", () => assert.deepEqual(incrementer([1, 2, 3]), [2, 4, 6]));
  it("Testing for [4, 6, 7, 1, 3]", () => assert.deepEqual(incrementer([4, 6, 7, 1, 3]), [5, 8, 0, 5, 8]));
  it("Testing for [3, 6, 9, 8, 9]", () => assert.deepEqual(incrementer([3, 6, 9, 8, 9]), [4, 8, 2, 2, 4]));
  it("Testing for [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]", () =>
    assert.deepEqual(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]), [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]));
});

describe("Random Tests", function() {
  const sol = nums => nums.map((x, i) => parseInt((x + i + 1).toString().slice(-1)));
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  for (let i = 0; i < 100; i++) {
    const a = Array(rand(1, 20))
      .fill()
      .map(() => rand(1, 9));
    it(`Testing for [${a.join(", ")}]`, () => assert.deepEqual(incrementer(a.slice()), sol(a)));
  }
});

