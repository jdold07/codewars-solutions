//+ ====================================================================================================================
//+
//+ 8 kyu - Simple Comparison?   [ ID: 57f6ecdfcca6e045d2001207 ] (simple-comparison)
//+ URL: https://www.codewars.com/kata/57f6ecdfcca6e045d2001207
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { add } = require("./simpleComparison")

describe("add", () => {
  it("should work for fixed tests", () => {
    assert.strictEqual(add("1", 1), true)
    assert.strictEqual(add(1, "1"), true)
    assert.strictEqual(add(1, "0"), false)
    assert.strictEqual(add("11", 11), true)
    assert.strictEqual(add(12, 12), true)
    assert.strictEqual(add(120, "021"), false)
  })
  it("should work for random tests as well", () => {
    function add2(a, b) {
      return a == b
    }
    let testOptions = [1, 2, 3, 4, 5, "1", "2", "3", "4", "5"]
    for (let i = 0; i < 100; i++) {
      let optionA = testOptions[Math.floor((Math.random() * 10) / 5)]
      let optionB = testOptions[Math.floor((Math.random() * 10) / 5)]
      assert.strictEqual(add(optionA, optionB), add2(optionA, optionB))
    }
  })
})
