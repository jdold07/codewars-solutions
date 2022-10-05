// 8 kyu - Count the Monkeys!  [ ID: 56f69d9f9400f508fb000ba7  (count-the-monkeys) ]
// URL: https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
// Category: ALGORITHMS  |  Tags: ARRAYS | FUNDAMENTALS | LISTS | ALGORITHMS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("monkeyCount", () => {
  it("should work for fixed tests", () => {
    assert.deepEqual(monkeyCount(5), [1, 2, 3, 4, 5])
    assert.deepEqual(monkeyCount(3), [1, 2, 3])
    assert.deepEqual(monkeyCount(9), [1, 2, 3, 4, 5, 6, 7, 8, 9])
    assert.deepEqual(monkeyCount(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    assert.deepEqual(monkeyCount(20), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
  })

  it("should work for random tests", () => {
    function solution(n) {
      let count = []
      for (let i = 1; i <= n; i++) {
        count.push(i)
      }
      return count
    }
    for (let i = 0; i < 100; i++) {
      let randNum = ~~(Math.random() * 100)
      assert.deepEqual(monkeyCount(randNum), solution(randNum), `Testing for n = ${randNum}`)
    }
  })
})
