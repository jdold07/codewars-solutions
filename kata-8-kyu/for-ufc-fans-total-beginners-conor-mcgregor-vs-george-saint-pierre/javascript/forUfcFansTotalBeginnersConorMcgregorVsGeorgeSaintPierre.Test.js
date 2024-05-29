//+ ====================================================================================================================
//+
//+ 8 kyu - For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre  [ ID: 582dafb611d576b745000b74 ] (for-ufc-fans-total-beginners-conor-mcgregor-vs-george-saint-pierre)
//+ URL: https://www.codewars.com/kata/582dafb611d576b745000b74
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { quote } = require("./forUfcFansTotalBeginnersConorMcgregorVsGeorgeSaintPierre")

describe("Uppercase Forms", function () {
  it("Normal", function () {
    assert.strictEqual(quote("George Saint Pierre"), "I am not impressed by your performance.")
    assert.strictEqual(quote("Conor McGregor"), "I'd like to take this chance to apologize.. To absolutely NOBODY!")
  })
  it("Full", function () {
    assert.strictEqual(quote("GEORGE SAINT PIERRE"), "I am not impressed by your performance.")
    assert.strictEqual(quote("CONOR MCGREGOR"), "I'd like to take this chance to apologize.. To absolutely NOBODY!")
  })
})

describe("Lowercase Forms", function () {
  it("Should work with basic tests", function () {

  assert.strictEqual(quote("george saint pierre"), "I am not impressed by your performance.")
  assert.strictEqual(quote("conor mcgregor"), "I'd like to take this chance to apologize.. To absolutely NOBODY!")
})
})
