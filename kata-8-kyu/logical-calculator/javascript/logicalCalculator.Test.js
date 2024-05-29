//+ ====================================================================================================================
//+
//+ 8 kyu - Logical calculator  [ ID: 57096af70dad013aa200007b ] (logical-calculator)
//+ URL: https://www.codewars.com/kata/57096af70dad013aa200007b
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { logicalCalc } = require("./logicalCalculator")

describe("Testing", function () {
  it("Fixed Tests", function () {
    assert.strictEqual(logicalCalc([true, true, true, false], "AND"), false)
    assert.strictEqual(logicalCalc([true, true, true, false], "OR"), true)
    assert.strictEqual(logicalCalc([true, true, true, false], "XOR"), true)
    assert.strictEqual(logicalCalc([true, true, false, false], "AND"), false)
    assert.strictEqual(logicalCalc([true, true, false, false], "OR"), true)
    assert.strictEqual(logicalCalc([true, true, false, false], "XOR"), false)
    assert.strictEqual(logicalCalc([true, false, false, false], "AND"), false)
    assert.strictEqual(logicalCalc([true, false, false, false], "OR"), true)
    assert.strictEqual(logicalCalc([true, false, false, false], "XOR"), true)
    assert.strictEqual(logicalCalc([true, true], "AND"), true)
    assert.strictEqual(logicalCalc([true, true], "OR"), true)
    assert.strictEqual(logicalCalc([true, true], "XOR"), false)
    assert.strictEqual(logicalCalc([false, false], "AND"), false)
    assert.strictEqual(logicalCalc([false, false], "OR"), false)
    assert.strictEqual(logicalCalc([false, false], "XOR"), false)
    assert.strictEqual(logicalCalc([false], "AND"), false)
    assert.strictEqual(logicalCalc([false], "OR"), false)
    assert.strictEqual(logicalCalc([false], "XOR"), false)
    assert.strictEqual(logicalCalc([true], "AND"), true)
    assert.strictEqual(logicalCalc([true], "OR"), true)
    assert.strictEqual(logicalCalc([true], "XOR"), true)
  })

  it("Random Tests", function () {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
    const sol = (arr, o) => arr.reduce((a, b) => (o == "AND" ? a && b : o == "OR" ? a || b : a != b))
    let ops = ["AND", "OR", "XOR"]

    for (let i = 0; i < 40; i++) {
      let a = Array.from({ length: randint(3, 20) }, () => [true, false][randint(0, 1)])
      for (let o of ops) {
        assert.strictEqual(logicalCalc(a, o), sol(a, o))
      }
    }
  })
})
