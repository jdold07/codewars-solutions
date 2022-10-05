// 8 kyu - Convert number to reversed array of digits  [ ID: 5583090cbe83f4fd8c000051  (convert-number-to-reversed-array-of-digits) ]
// URL: https://www.codewars.com/kata/5583090cbe83f4fd8c000051
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(digitize(35231), [1, 3, 2, 5, 3])
    assert.deepEqual(digitize(0), [0])
    assert.deepEqual(digitize(23582357), [7, 5, 3, 2, 8, 5, 3, 2])
    assert.deepEqual(digitize(984764738), [8, 3, 7, 4, 6, 7, 4, 8, 9])
    assert.deepEqual(digitize(45762893920), [0, 2, 9, 3, 9, 8, 2, 6, 7, 5, 4])
    assert.deepEqual(digitize(548702838394), [4, 9, 3, 8, 3, 8, 2, 0, 7, 8, 4, 5])
  })
})

describe("Random tests", () => {
  let i, x, y

  it("Testing for 37 random tests", () => {
    for (x = i = 1; i <= 37; x = ++i) {
      y = 10 + Math.ceil((9 * Math.pow(1.7, x) - 10) * Math.random())
      let ans = y.toString().split("").reverse().map(Number)
      assert.deepEqual(digitize(y), ans, `Testing for n = ${y}`)
    }
  })
})
