//+ ====================================================================================================================
//+
//+ 7 kyu - Difference Of Squares  [ ID: 558f9f51e85b46e9fa000025 ] (difference-of-squares)
//+ URL: https://www.codewars.com/kata/558f9f51e85b46e9fa000025
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { differenceOfSquares } = require("./differenceOfSquares")

describe("Difference of squares", function () {
  it("returns 170 for 5", () => {
    assert.strictEqual(differenceOfSquares(5), 170)
  })
  it("returns 2640 for 10", () => {
    assert.strictEqual(differenceOfSquares(10), 2640)
  })
  it("returns 25164150 for 100", () => {
    assert.strictEqual(differenceOfSquares(100), 25164150)
  })
})

describe("Some random tests", function () {
  function tst() {
    let x = 1 + ~~(Math.random() * 100),
      exp = 0,
      sum = 0
    for (let i = 0; i < x; i++) {
      exp += i * i
      sum += i
    }
    exp = sum * sum - exp
    it("Should return " + exp + " for " + --x, () => {
      assert.strictEqual(differenceOfSquares(x), exp)
    })
  }

  for (let i = 0; i < 40; i++) tst()
})
