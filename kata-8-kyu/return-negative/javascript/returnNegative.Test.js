//+ ====================================================================================================================
//+
//+ 8 kyu - Return Negative  [ ID: 55685cd7ad70877c23000102 ] (return-negative)
//+ URL: https://www.codewars.com/kata/55685cd7ad70877c23000102
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { makeNegative } = require("./returnNegative")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(makeNegative(42), -42)
    assert.strictEqual(makeNegative(-9), -9)
    assert.strictEqual(makeNegative(0), 0)
    assert.strictEqual(makeNegative(1), -1)
    assert.strictEqual(makeNegative(-1), -1)

    assert.strictEqual(makeNegative(0.12), -0.12)
    assert.strictEqual(makeNegative(0.00001), -0.00001)
    assert.strictEqual(makeNegative(-0.00001), -0.00001)

    let rnd = Math.floor(Math.random() * 101)
    assert.strictEqual(makeNegative(rnd), -rnd)

    rnd = -Math.floor(Math.random() * 101)
    assert.strictEqual(makeNegative(rnd), rnd)
  })
})
