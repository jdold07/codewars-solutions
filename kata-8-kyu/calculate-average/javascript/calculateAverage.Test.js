//+ ====================================================================================================================
//+
//+ 8 kyu - Calculate average   [ ID: 57a2013acf1fa5bfc4000921 ] (calculate-average)
//+ URL: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | FUNCTIONAL PROGRAMMING
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { findAverage } = require("./calculateAverage")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findAverage([1, 1, 1]), 1)
    assert.strictEqual(findAverage([1, 2, 3]), 2)
    assert.strictEqual(findAverage([1, 2, 3, 4]), 2.5)
  })
})

describe("Random tests", () => {
  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  for (let i = 0; i < 100; i++) {
    let arr = Array.from({ length: randint(0, 15) }, () => randint(1, 100))
    let expected = !arr.length ? 0 : arr.reduce((a, b) => a + b, 0) / arr.length
    it(`findAverage(${JSON.stringify(arr)}) should equal ${expected}`, () => {
      assert.strictEqual(findAverage(arr), expected)
    })
  }
})
