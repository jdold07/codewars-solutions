//+ ====================================================================================================================
//+
//+ 5 kyu - Common Denominators  [ ID: 54d7660d2daf68c619000d95 ] (common-denominators)
//+ URL: https://www.codewars.com/kata/54d7660d2daf68c619000d95
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS | MATHEMATICS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { convertFrac } = require("./commonDenominators")

describe("Tests", () => {
  it("test", () => {
    let lst = [
      [1, 2],
      [1, 3],
      [1, 4]
    ]
    assert.strictEqual(convertFrac(lst), "(6,12)(4,12)(3,12)")

    lst = [
      [69, 130],
      [87, 1310],
      [3, 4]
    ]
    assert.strictEqual(convertFrac(lst), "(18078,34060)(2262,34060)(25545,34060)")

    lst = []
    assert.strictEqual(convertFrac(lst), "")

    lst = [
      [77, 130],
      [84, 131],
      [3, 4]
    ]
    assert.strictEqual(convertFrac(lst), "(20174,34060)(21840,34060)(25545,34060)")

    lst = [
      [6, 13],
      [187, 1310],
      [31, 41]
    ]
    assert.strictEqual(convertFrac(lst), "(322260,698230)(99671,698230)(527930,698230)")

    lst = [
      [8, 15],
      [7, 111],
      [4, 25]
    ]
    assert.strictEqual(convertFrac(lst), "(1480,2775)(175,2775)(444,2775)")

    lst = [
      [1, 100],
      [3, 1000],
      [1, 2500],
      [1, 20000]
    ]
    assert.strictEqual(convertFrac(lst), "(200,20000)(60,20000)(8,20000)(1,20000)")

    lst = [
      [1, 1],
      [3, 1],
      [4, 1],
      [5, 1]
    ]
    assert.strictEqual(convertFrac(lst), "(1,1)(3,1)(4,1)(5,1)")
  })
})
