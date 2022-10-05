// 8 kyu - Thinkful - Number Drills: Pixelart planning  [ ID: 58630e2ae88af44d2b0000ea  (thinkful-number-drills-pixelart-planning) ]
// URL: https://www.codewars.com/kata/58630e2ae88af44d2b0000ea
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for 4050 and 27", () => {
    assert.strictEqual(isDivisible(4050, 27), true)
  })
  it("Testing for 4066 and 27", () => {
    assert.strictEqual(isDivisible(4066, 27), false)
  })
  it("Testing for 10000 and 20", () => {
    assert.strictEqual(isDivisible(10000, 20), true)
  })
  it("Testing for 10005 and 20", () => {
    assert.strictEqual(isDivisible(10005, 20), false)
  })
  it("Testing for 10005 and 1", () => {
    assert.strictEqual(isDivisible(10005, 1), true)
  })
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a
  const sol = (w, p) => !(w % p)

  for (let i = 0; i < 40; i++) {
    const w = randint(500, 11000),
      p = randint(2, 29)
    it(`Testing for ${w} and ${p}`, () => {
      assert.strictEqual(isDivisible(w, p), sol(w, p), "It should work for random inputs too")
    })
  }
})
