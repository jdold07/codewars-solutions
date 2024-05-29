//+ ====================================================================================================================
//+
//+ 7 kyu - Special  Number (Special Numbers Series  #5)  [ ID: 5a55f04be6be383a50000187 ] (special-number-special-numbers-series-number-5)
//+ URL: https://www.codewars.com/kata/5a55f04be6be383a50000187
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { specialNumber } = require("./specialNumberSpecialNumbersSeriesNumber5")

it("Basic tests", () => {
  assert.strictEqual(specialNumber(2), "Special!!")
  assert.strictEqual(specialNumber(3), "Special!!")
  assert.strictEqual(specialNumber(6), "NOT!!")
  assert.strictEqual(specialNumber(9), "NOT!!")
  assert.strictEqual(specialNumber(11), "Special!!")
  assert.strictEqual(specialNumber(55), "Special!!")
  assert.strictEqual(specialNumber(26), "NOT!!")
  assert.strictEqual(specialNumber(92), "NOT!!")
  assert.strictEqual(specialNumber(25432), "Special!!")
  assert.strictEqual(specialNumber(2783), "NOT!!")
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
  const sol = (n) => (n == 0 || (n % 10 < 6 && sol(Math.floor(n / 10)) == "Special!!") ? "Special!!" : "NOT!!")

  for (let i = 0; i < 40; i++) {
    const n = +(randint(0, 1)
      ? Array.from({ length: randint(1, 12) }, () => randint(0, 5))
      : Array.from({ length: randint(1, 15) }, () => randint(0, 9))
    ).join("")
    it(`Testing for ${n}`, () => {
      assert.strictEqual(specialNumber(n), sol(n), "It should work for random inputs too")
    })
  }
})
