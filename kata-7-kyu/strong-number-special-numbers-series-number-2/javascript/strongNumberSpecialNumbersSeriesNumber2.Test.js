//+ ====================================================================================================================
//+
//+ 7 kyu - Strong Number (Special Numbers Series #2)    [ ID: 5a4d303f880385399b000001 ] (strong-number-special-numbers-series-number-2)
//+ URL: https://www.codewars.com/kata/5a4d303f880385399b000001
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { strong } = require("./strongNumberSpecialNumbersSeriesNumber2")

describe("Fixed Tests", () => {
  it("Testing for 1", () => {
    assert.strictEqual(strong(1), "STRONG!!!!")
  })
  it("Testing for 2", () => {
    assert.strictEqual(strong(2), "STRONG!!!!")
  })
  it("Testing for 145", () => {
    assert.strictEqual(strong(145), "STRONG!!!!")
  })
  it("Testing for 7", () => {
    assert.strictEqual(strong(7), "Not Strong !!")
  })
  it("Testing for 93", () => {
    assert.strictEqual(strong(93), "Not Strong !!")
  })
  it("Testing for 185", () => {
    assert.strictEqual(strong(185), "Not Strong !!")
  })
})
describe("Random Tests", () => {
  const refStrong = (n) => ([1, 2, 145, 40585].includes(n) ? "STRONG!!!!" : "Not Strong !!")
  const rnd = (n) => Math.floor(Math.random() * n)
  for (let i = 0; i < 100; i++) {
    const n = rnd(2) ? rnd(999) + 1 : [1, 2, 145, 40585][rnd(4)]
    it(`Testing for ${n}`, () => {
      assert.strictEqual(strong(n), refStrong(n))
    })
  }
})
