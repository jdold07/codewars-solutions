//+ ====================================================================================================================
//+
//+ 7 kyu - Automorphic Number (Special Numbers Series  #6)  [ ID: 5a58d889880385c2f40000aa ] (automorphic-number-special-numbers-series-number-6)
//+ URL: https://www.codewars.com/kata/5a58d889880385c2f40000aa
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { automorphic } = require("./automorphicNumberSpecialNumbersSeriesNumber6")

describe("Basic tests", () => {
  it("Should work with basic tests", function () {
  assert.strictEqual(automorphic(1), "Automorphic")
  assert.strictEqual(automorphic(3), "Not!!")
  assert.strictEqual(automorphic(6), "Automorphic")
  assert.strictEqual(automorphic(9), "Not!!")
  assert.strictEqual(automorphic(25), "Automorphic")
  assert.strictEqual(automorphic(53), "Not!!")
  assert.strictEqual(automorphic(76), "Automorphic")
  assert.strictEqual(automorphic(95), "Not!!")
  assert.strictEqual(automorphic(625), "Automorphic")
  assert.strictEqual(automorphic(225), "Not!!")
})
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
  const sol = (n) => ([1, 5, 6, 25, 76, 376, 625, 9376].includes(n) ? "Automorphic" : "Not!!")

  for (let i = 0; i < 40; i++) {
    const n = randint(0, 1) ? [1, 5, 6, 25, 76, 376, 625, 9376][randint(0, 7)] : randint(1, Math.pow(80, randint(0, 2)) * 10)
    it(`Testing for ${n}`, () => {
      assert.strictEqual(automorphic(n), sol(n), "It should work for random inputs too")
    })
  }
})
