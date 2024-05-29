//+ ====================================================================================================================
//+
//+ 8 kyu - Array plus array  [ ID: 5a2be17aee1aaefe2a000151 ] (array-plus-array)
//+ URL: https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
//+ Category: BUG_FIXES  |  Tags: FUNDAMENTALS | ARRAYS | DEBUGGING
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { arrayPlusArray } = require("./arrayPlusArray")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21)
    assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21)
    assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15)
    assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100)
  })
})

describe("Random tests", function () {
  const randomInt = (a, b) => Math.floor(Math.random() * (b - a + 1) + a)

  const check = (arr1, arr2) => {
    return arr1.reduce((sum, cur) => sum + cur) + arr2.reduce((sum, cur) => sum + cur)
  }

  it("Testing for 20 random tests", () => {
    for (let i = 0; i < 20; i++) {
      let arr1 = []
      let arr2 = []
      for (let i = 0; i < 5; i++) {
        arr1.push(randomInt(-10000, 10000))
        arr2.push(randomInt(-10000, 10000))
      }
      assert.strictEqual(
        arrayPlusArray(arr1.slice(), arr2.slice()),
        check(arr1.slice(), arr2.slice()),
        `Testing for arrayPlusArray ([ ${arr1} ], [  ${arr2} ])`
      )
    }
  })
})
