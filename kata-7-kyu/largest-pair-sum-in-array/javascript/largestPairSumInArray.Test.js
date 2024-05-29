//+ ====================================================================================================================
//+
//+ 7 kyu - Largest pair sum in array  [ ID: 556196a6091a7e7f58000018 ] (largest-pair-sum-in-array)
//+ URL: https://www.codewars.com/kata/556196a6091a7e7f58000018
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { largestPairSum } = require("./largestPairSumInArray")

function doTest(array, expected) {
  const actual = largestPairSum(array)
  assert.strictEqual(actual, expected, `for array [${array.join(", ")}]:\n`)
}

it("Basic tests", () => {
  doTest([10, 14, 2, 23, 19], 42)
  doTest([-100, -29, -24, -19, 19], 0)
  doTest([1, 2, 3, 4, 6, -1, 2], 10)
  doTest([-10, -8, -16, -18, -19], -18)
})

it("Random tests", () => {
  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  for (let i = 0; i < 100; i++) {
    const array = Array.from({ length: randint(2, 40) }, () => randint(-100, +100))
    const expected = array
      .slice()
      .sort((a, b) => b - a)
      .slice(0, 2)
      .reduce((x, y) => x + y, 0)

    doTest(array, expected)
  }
})
