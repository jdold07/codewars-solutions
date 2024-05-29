//+ ====================================================================================================================
//+
//+ 7 kyu - Number Of Occurrences  [ ID: 52829c5fe08baf7edc00122b ] (number-of-occurrences)
//+ URL: https://www.codewars.com/kata/52829c5fe08baf7edc00122b
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
require("./numberOfOccurrences")

describe("Tests", () => {
  it("test", () => {
    let arr = [0, 5, 5, 2, "c", "a", "aba", "a"]
    assert.strictEqual(arr.numberOfOccurrences(0), 1)
    assert.strictEqual(arr.numberOfOccurrences(4), 0)
    assert.strictEqual(arr.numberOfOccurrences(5), 2)
    assert.strictEqual(arr.numberOfOccurrences("c"), 1)
    assert.strictEqual(arr.numberOfOccurrences("a"), 2)
  })
})
