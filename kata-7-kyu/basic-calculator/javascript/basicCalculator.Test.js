//+ ====================================================================================================================
//+
//+ 7 kyu - Basic Calculator  [ ID: 5296455e4fe0cdf2e000059f ] (basic-calculator)
//+ URL: https://www.codewars.com/kata/5296455e4fe0cdf2e000059f
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { calculate } = require("./basicCalculator")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(calculate(3.2, "+", 8), 11.2, "3.2 + 8 = 11.2")
    assert.strictEqual(calculate(3.2, "-", 8), -4.8, "3.2 - 8 = -4.8")
    assert.strictEqual(calculate(3.2, "/", 8), 0.4, "3.2 / 8 = .4")
    assert.strictEqual(calculate(3.2, "*", 8), 25.6, "3.2 * 8 = 25.6")
    assert.strictEqual(calculate(-3, "+", 0), -3, "-3 + 0 = -3")
    assert.strictEqual(calculate(-3, "-", 0), -3, "-3 - 0 = -3")
    assert.strictEqual(calculate(-3, "/", 0), null, "-3 / 0 = null")
    assert.strictEqual(calculate(-2, "/", -2), 1, "-2 / -2 = 1")
    assert.strictEqual(calculate(-3, "*", 0), 0, "-3 * 0 = 0")
    assert.strictEqual(calculate(-3, "w", 0), null, "-3 w 0 = null")
  })
})
