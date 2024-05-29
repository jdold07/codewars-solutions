//+ ====================================================================================================================
//+
//+ 8 kyu - You Can't Code Under Pressure #1  [ ID: 53ee5429ba190077850011d4 ] (you-cant-code-under-pressure-number-1)
//+ URL: https://www.codewars.com/kata/53ee5429ba190077850011d4
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================


import { assert } from "vitest"
const { doubleInteger } = require("./youCantCodeUnderPressureNumber1")

describe("Double integer", () => {
  it("Fixed tests", () => {
    assert.strictEqual(doubleInteger(2), 4)
    assert.strictEqual(doubleInteger(4), 8)
    assert.strictEqual(doubleInteger(-10), -20)
    assert.strictEqual(doubleInteger(0), 0)
    assert.strictEqual(doubleInteger(100), 200)
  })
  it("Random tests", () => {
    for (let i = 100; i--; ) {
      const n = Math.floor(Math.random() * 1999) - 999
      assert.strictEqual(doubleInteger(n), n + n)
    }
  })
})


