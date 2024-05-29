//+ ====================================================================================================================
//+
//+ 5 kyu - Convert A Hex String To RGB  [ ID: 5282b48bb70058e4c4000fa7 ] (convert-a-hex-string-to-rgb)
//+ URL: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
//+ Category: ALGORITHMS  |  Tags: PARSING | STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { hexStringToRGB } = require("./convertAHexStringToRgb")

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(hexStringToRGB("#FF9933"), { r: 255, g: 153, b: 51 })
    assert.deepEqual(hexStringToRGB("#beaded"), { r: 190, g: 173, b: 237 })
    assert.deepEqual(hexStringToRGB("#000000"), { r: 0, g: 0, b: 0 })
    assert.deepEqual(hexStringToRGB("#111111"), { r: 17, g: 17, b: 17 })
    assert.deepEqual(hexStringToRGB("#Fa3456"), { r: 250, g: 52, b: 86 })
  })
})
