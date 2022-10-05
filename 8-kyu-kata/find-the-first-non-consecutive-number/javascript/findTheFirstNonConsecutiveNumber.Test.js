// 8 kyu - Find the first non-consecutive number  [ ID: 58f8a3a27a5c28d92e000144  (find-the-first-non-consecutive-number) ]
// URL: https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Fixed tests", () => {
  it("a simple example", function () {
    const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])
    assert.strictEqual(first, 6)
  })

  it("a zero example", function () {
    const first = firstNonConsecutive([-3, -2, 0, 1, 2])
    assert.strictEqual(first, 0)
  })

  it("a negetive example", function () {
    const first = firstNonConsecutive([-3, -1, 0, 1, 2])
    assert.strictEqual(first, -1)
  })

  it("all sequential", function () {
    const first = firstNonConsecutive([1, 2, 3, 4])
    assert.strictEqual(first, null)
  })
})

describe("random cases", function () {
  function refFirstNonConsecutive(arr) {
    let index = 1

    while (index < arr.length) {
      if (arr[index - 1] !== arr[index] - 1) return arr[index]
      index++
    }

    return null
  }

  it("Testing for 10 random tests", () => {
    for (let i = 0; i < 10; i++) {
      let testArr = []
      let offset = Math.floor(Math.random() * 20) - 10
      for (let j = 0; j < 20; j++) {
        testArr.push(offset + Math.floor(Math.random() * 10))
      }
      testArr = testArr
        .sort((a, b) => a - b)
        .filter((item, pos, ary) => {
          return !pos || item != ary[pos - 1]
        })
      const first = firstNonConsecutive(testArr.slice())
      const expected = refFirstNonConsecutive(testArr.slice())
      assert.strictEqual(first, expected, `Testing for arr = ${testArr}`)
    }
  })
})
