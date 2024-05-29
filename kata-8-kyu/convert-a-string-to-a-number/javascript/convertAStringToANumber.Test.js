//+ ====================================================================================================================
//+
//+ 8 kyu - Convert a String to a Number!  [ ID: 544675c6f971f7399a000e79 ] (convert-a-string-to-a-number)
//+ URL: https://www.codewars.com/kata/544675c6f971f7399a000e79
//+ Category: REFERENCE  |  Tags: PARSING | STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { stringToNumber } = require("./convertAStringToANumber")

describe("stringToNumber", function () {
  it("should work for the examples", function () {
    assert.strictEqual(stringToNumber("1234"), 1234)
    assert.strictEqual(stringToNumber("605"), 605)
    assert.strictEqual(stringToNumber("1405"), 1405)
    assert.strictEqual(stringToNumber("-7"), -7)
  })
  it("should work for random strings", function () {
    let i, t
    for (i = 0; i < 100; ++i) {
      t = Math.round(Math.random() * 1e6 - 5e5)
      assert.strictEqual(stringToNumber(t.toString(10)), t)
    }
  })
})
