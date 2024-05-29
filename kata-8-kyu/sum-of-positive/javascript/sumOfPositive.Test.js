//+ ====================================================================================================================
//+
//+ 8 kyu - Sum of positive  [ ID: 5715eaedb436cf5606000381 ] (sum-of-positive)
//+ URL: https://www.codewars.com/kata/5715eaedb436cf5606000381
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { positiveSum } = require("./sumOfPositive")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([1, 2, 3, 4, 5]), 15)
    assert.strictEqual(positiveSum([1, -2, 3, 4, 5]), 13)
    assert.strictEqual(positiveSum([]), 0)
    assert.strictEqual(positiveSum([-1, -2, -3, -4, -5]), 0)
    assert.strictEqual(positiveSum([-1, 2, 3, 4, -5]), 9)
  })
})

describe("Random tests", () => {
  function sol(arr) {
    return arr.reduce((x, y) => x + (y > 0 ? y : 0), 0)
  }

  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  for (let i = 0; i < 100; i++) {
    let arr = Array.from({ length: randint(5, 120) }, () => randint(-100, 100))
    let expected = sol(arr.slice())
    it(`positiveSum(${JSON.stringify(arr)}) should equal ${expected}`, () => {
      assert.strictEqual(positiveSum(arr), expected)
    })
  }
})
