//+ ====================================================================================================================
//+
//+ 8 kyu - Exclusive "or" (xor) Logical Operator  [ ID: 56fa3c5ce4d45d2a52001b3c ] (exclusive-or-xor-logical-operator)
//+ URL: https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomNumber } = require("../../../utils/cwUtils")
const { assert } = require("chai")
const { xor } = require("./exclusiveOrXorLogicalOperator")

describe("Your 'xor' function/operator", () => {
  it("should work for the four basic cases described above", () => {
    assert.strictEqual(xor(false, false), false, "false xor false === false")
    assert.strictEqual(xor(true, false), true, "true xor false === true")
    assert.strictEqual(xor(false, true), true, "false xor true === true")
    assert.strictEqual(xor(true, true), false, "true xor true === false")
    assert.notStrictEqual(xor(true, true), true, "'xor' is NOT identical to 'or'")
  })
  it("should work properly when nested", () => {
    assert.strictEqual(xor(false, xor(false, false)), false)
    assert.strictEqual(xor(xor(true, false), false), true)
    assert.strictEqual(xor(xor(true, true), false), false)
    assert.strictEqual(xor(true, xor(true, true)), true)
    assert.strictEqual(xor(xor(false, false), xor(false, false)), false)
    assert.strictEqual(xor(xor(false, false), xor(false, true)), true)
    assert.strictEqual(xor(xor(true, false), xor(false, false)), true)
    assert.strictEqual(xor(xor(true, false), xor(true, false)), false)
    assert.strictEqual(xor(xor(true, true), xor(true, false)), true)
    assert.strictEqual(xor(xor(true, xor(true, true)), xor(xor(true, true), false)), true)
  })
  it("should work for random tests", () => {
    let a, b
    for (let i = 0; i < 666; i++) {
      a = randomNumber() > 50
      b = randomNumber() > 50
      assert.strictEqual(xor(a, b), (a || b) && !(a && b))
    }
  })
})
