//+ ====================================================================================================================
//+
//+ 8 kyu - Multiply  [ ID: 50654ddff44f800200000004 ] (multiply)
//+ URL: https://www.codewars.com/kata/50654ddff44f800200000004
//+ Category: BUG_FIXES  |  Tags: DEBUGGING | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { multiply } = require("./multiply")

describe("Multiply", () => {
  it("fixed tests", () => {
    assert.strictEqual(multiply(1, 1), 1)
    assert.strictEqual(multiply(2, 1), 2)
    assert.strictEqual(multiply(2, 2), 4)
    assert.strictEqual(multiply(3, 5), 15)
  })

  it("random tests", () => {
    for (let i = 0; i < 100; i++) {
      let [a, b] = [(Math.random() * 100) | 0, (Math.random() * 100) | 0]
      assert.strictEqual(multiply(a, b), a * b)
    }
  })
})
