//+ ====================================================================================================================
//+
//+ 8 kyu - Implement Array.prototype.filter()  [ ID: 56dd9b84fe5754786f0014f7 ] (implement-array-dot-prototype-dot-filter-1)
//+ URL: https://www.codewars.com/kata/56dd9b84fe5754786f0014f7
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
require("./implementArrayDotPrototypeDotFilter1")

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(
      [1, 2, 3, 4].filter((num) => {
        return num > 3
      }),
      [4]
    )
    assert.deepEqual(
      [183, 234, 33, 44].filter((num) => {
        return num < 183
      }),
      [33, 44]
    )
    assert.deepEqual(
      ["123", "123123", "123123132123"].filter((num) => {
        return parseInt(num) > 123
      }),
      ["123123", "123123132123"]
    )
    assert.deepEqual(
      ["uuuuu", "uu"].filter((str) => {
        return str.length > 3
      }),
      ["uuuuu"]
    )
    assert.deepEqual(
      [].filter((num) => {
        return num > 3
      }),
      []
    )
    assert.deepEqual(
      [
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4]
      ].filter((array) => {
        return array.length > 3
      }),
      [
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4]
      ]
    )
    assert.deepEqual(
      [[], [], []].filter((array) => {
        return array.length > 1
      }),
      []
    )
    let num1 = Math.random()
    let num2 = Math.random()
    let num3 = Math.random()

    assert.deepEqual(
      [num1, num2, num3].filter((num) => {
        return num === num1
      }),
      [num1]
    )
    assert.deepEqual(
      [num1, num2, num3].filter((num) => {
        return num === num2
      }),
      [num2]
    )
    assert.deepEqual(
      [num1, num2, num3].filter((num) => {
        return num === num3
      }),
      [num3]
    )
  })
})
