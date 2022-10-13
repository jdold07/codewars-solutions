//+ ====================================================================================================================
//+
//+ 7 kyu - Filter Coffee  [ ID: 56069d0c4af7f633910000d3 ] (filter-coffee)
//+ URL: https://www.codewars.com/kata/56069d0c4af7f633910000d3
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { search } = require("./filterCoffee")

describe("Tests", () => {
  it("test", () => {
    // "Should filter out the prices outside budget"
    assert.strictEqual(search(3, [6, 1, 2, 9, 2]), "1,2,2")

    // "Should filter out the prices outside budget"
    assert.strictEqual(search(14, [7, 3, 23, 9, 14, 20, 7]), "3,7,7,9,14")

    // "Should return an empty string when budget is zero"
    assert.strictEqual(search(0, [6, 1, 2, 9, 2]), "")

    // "Should return an empty string when no prices are given"
    assert.strictEqual(search(10, []), "")

    // "Should filter out the prices outside budget"
    assert.strictEqual(search(24, [24, 0, 100, 2, 5]), "0,2,5,24")

    // "Should filter out the prices outside budget"
    assert.strictEqual(search(24, [2.7, 0, 100.9, 1, 5.5]), "0,1,2.7,5.5")
  })
})
