//+ ====================================================================================================================
//+
//+ 7 kyu - Disarium Number (Special Numbers Series  #3)  [ ID: 5a53a17bfd56cb9c14000003 ] (disarium-number-special-numbers-series-number-3)
//+ URL: https://www.codewars.com/kata/5a53a17bfd56cb9c14000003
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { disariumNumber } = require("./disariumNumberSpecialNumbersSeriesNumber3")

describe("Basic tests", () => {
  assert.strictEqual(disariumNumber(89), "Disarium !!")
  assert.strictEqual(disariumNumber(564), "Not !!")
  assert.strictEqual(disariumNumber(1024), "Not !!")
  assert.strictEqual(disariumNumber(135), "Disarium !!")
  assert.strictEqual(disariumNumber(136586), "Not !!")
})

describe("Random tests", () => {
  const randint = (a, b) => Math.floor(Math.random() * (b - a + 1) + a)
  const sol = (n) => ([...(n + "")].reduce((a, b, i) => a + Math.pow(b, i + 1), 0) == n ? "Disarium !!" : "Not !!")
  const base = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135, 175, 518, 598, 1306, 1676, 2427, 2646798]

  for (let i = 0; i < 40; i++) {
    const n = randint(0, 1) ? randint(1, Math.pow(10, randint(1, 6))) : base[randint(0, base.length - 1)]
    it(`Testing for ${n}`, () => {
      assert.strictEqual(disariumNumber(n), sol(n), "It should work for random inputs too")
    })
  }
})
