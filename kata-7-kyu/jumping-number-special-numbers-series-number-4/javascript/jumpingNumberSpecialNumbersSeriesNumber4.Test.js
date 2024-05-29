//+ ====================================================================================================================
//+
//+ 7 kyu - Jumping  Number (Special Numbers Series  #4)  [ ID: 5a54e796b3bfa8932c0000ed ] (jumping-number-special-numbers-series-number-4)
//+ URL: https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { jumpingNumber } = require("./jumpingNumberSpecialNumbersSeriesNumber4")

describe("Basic tests", () => {
  it("Should work with basic tests", function () {

  assert.strictEqual(jumpingNumber(1), "Jumping!!")
  assert.strictEqual(jumpingNumber(7), "Jumping!!")
  assert.strictEqual(jumpingNumber(9), "Jumping!!")
  assert.strictEqual(jumpingNumber(23), "Jumping!!")
  assert.strictEqual(jumpingNumber(32), "Jumping!!")
  assert.strictEqual(jumpingNumber(79), "Not!!")
  assert.strictEqual(jumpingNumber(98), "Jumping!!")
  assert.strictEqual(jumpingNumber(8987), "Jumping!!")
  assert.strictEqual(jumpingNumber(4343456), "Jumping!!")
  assert.strictEqual(jumpingNumber(98789876), "Jumping!!")
})
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
  const sol = (n) =>
    n < 10 || (Math.abs((n % 10) - Math.floor((n % 100) / 10)) == 1 && sol(Math.floor(n / 10)) == "Jumping!!")
      ? "Jumping!!"
      : "Not!!"

  for (let i = 0; i < 40; i++) {
    const n = randint(1, Math.pow(10, randint(1, 6)))
    it(`Testing for ${n}`, () => {
      assert.strictEqual(jumpingNumber(n), sol(n), "It should work for random inputs too")
    })
  }
})
