//+ ====================================================================================================================
//+
//+ 8 kyu - Improving Math.round(x)  [ ID: 56be025f9347a066c7000e4f ] (improving-math-dot-round-x)
//+ URL: https://www.codewars.com/kata/56be025f9347a066c7000e4f
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING | MATHEMATICS | LOGIC
//+
//+ ====================================================================================================================

import { assert } from "vitest"
require("./improvingMathDotRoundX")

describe("Tests", () => {
  it("test", () => {
    console.log("<h3>Rounding Math.PI</h3>")
    assert.strictEqual(Math.roundTo(Math.PI, 1), 3.1)
    assert.strictEqual(Math.roundTo(Math.PI, 2), 3.14)
    assert.strictEqual(Math.roundTo(Math.PI, 3), 3.142)
    assert.strictEqual(Math.roundTo(Math.PI, 4), 3.1416)
    assert.strictEqual(Math.roundTo(Math.PI, 5), 3.14159)
    assert.strictEqual(Math.roundTo(Math.PI, 6), 3.141593)
    assert.strictEqual(Math.roundTo(Math.PI, 7), 3.1415927)
    assert.strictEqual(Math.roundTo(Math.PI, 8), 3.14159265)
    assert.strictEqual(Math.roundTo(Math.PI, 9), 3.141592654)
    assert.strictEqual(Math.roundTo(Math.PI, 10), 3.1415926536)
    console.log("<hr />")

    console.log("<h3>Rounding Math.E</h3>")
    assert.strictEqual(Math.roundTo(Math.E, 1), 2.7)
    assert.strictEqual(Math.roundTo(Math.E, 2), 2.72)
    assert.strictEqual(Math.roundTo(Math.E, 3), 2.718)
    assert.strictEqual(Math.roundTo(Math.E, 4), 2.7183)
    assert.strictEqual(Math.roundTo(Math.E, 5), 2.71828)
    assert.strictEqual(Math.roundTo(Math.E, 6), 2.718282)
    assert.strictEqual(Math.roundTo(Math.E, 7), 2.7182818)
    assert.strictEqual(Math.roundTo(Math.E, 8), 2.71828183)
    assert.strictEqual(Math.roundTo(Math.E, 9), 2.718281828)
    assert.strictEqual(Math.roundTo(Math.E, 10), 2.7182818285)
    console.log("<hr />")

    console.log("<h3>Random Tests</h3>")
    function rndto(n, p) {
      return Math.round(n * 10 ** p) / 10 ** p
    }
    for (let i = 0; i < 100; i++) {
      let randNum = 1000 * Math.random()
      let precision = Math.round(10 * Math.random())
      assert.strictEqual(Math.roundTo(randNum, precision), rndto(randNum, precision))
    }
  })
})
