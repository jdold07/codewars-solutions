//+ ====================================================================================================================
//+
//+ 8 kyu - Parse float  [ ID: 57a386117cb1f31890000039 ] (parse-float)
//+ URL: https://www.codewars.com/kata/57a386117cb1f31890000039
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { parseF } = require("./parseFloat")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(parseF("1"), 1.0)
    assert.strictEqual(parseF("123"), 123.0)
    assert.strictEqual(parseF("2.5"), 2.5)
    assert.strictEqual(parseF("one"), null)
    assert.strictEqual(parseF("0"), 0)
    assert.strictEqual(parseF(0), 0)
    assert.strictEqual(parseF(true), null)
    assert.strictEqual(parseF(false), null)
    assert.strictEqual(parseF(), null)
  })
})
