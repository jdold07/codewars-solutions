// 8 kyu - Pillars  [ ID: 5bb0c58f484fcd170700063d  (pillars) ]
// URL: https://www.codewars.com/kata/5bb0c58f484fcd170700063d
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Basic tests", function () {
  it("Testing for number of pillars: 1, distance: 10 m and width: 10 cm", function () {
    assert.strictEqual(pillars(1, 10, 10), 0)
  })
  it("Testing for number of pillars: 2, distance: 20 m and width: 25 cm", function () {
    assert.strictEqual(pillars(2, 20, 25), 2000)
  })
  it("Testing for number of pillars: 11, distance: 15 m and width: 30 cm", function () {
    assert.strictEqual(pillars(11, 15, 30), 15270)
  })
})

describe("Random tests", function () {
  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  function pillarsSolution(numPill, dist, width) {
    return (numPill - 1) * dist * 100 + width * Math.max(0, numPill - 2)
  }
  let n, d, w
  for (let i = 0; i < 50; i++) {
    n = randInt(1, 1000)
    d = randInt(10, 30)
    w = randInt(10, 50)
    let actual = pillars(n, d, w),
      expected = pillarsSolution(n, d, w)
    it("Testing for number of pillars: " + n + ", distance: " + d + " m and width: " + w + " cm", function () {
      assert.strictEqual(actual, expected, "It should work for random inputs too")
    })
  }
})
