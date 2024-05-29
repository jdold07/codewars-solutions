//+ ====================================================================================================================
//+
//+ 6 kyu - Find the odd int  [ ID: 54da5a58ea159efa38000836 ] (find-the-odd-int)
//+ URL: https://www.codewars.com/kata/54da5a58ea159efa38000836
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { findOdd } = require("./findTheOddInt")

function doTest(a, n) {
  console.log("A = ", a)
  console.log("n = ", n)
  assert.strictEqual(findOdd(a), n)
}
it("Example tests", function () {
  doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5)
  doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1)
  doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5)
  doTest([10], 10)
  doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10)
  doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1)
})
it("Random tests", function () {
  let i, sz, a, j, n
  for (i = 0; i < 40; ++i) {
    sz = Math.round(Math.random() * 1000 + 50)
    if (!sz % 2) {
      ++sz
    }
    a = []
    for (j = 0; j < sz - 1; j += 2) {
      n = Math.round(Math.random() * 1000)
      a.push(n)
      a.push(n)
    }
    n = Math.round(Math.random() * 1000)
    a.push(n)
    assert.strictEqual(findOdd(a), n)
  }
})
