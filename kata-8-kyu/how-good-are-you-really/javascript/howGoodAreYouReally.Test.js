//+ ====================================================================================================================
//+
//+ 8 kyu - How good are you really?  [ ID: 5601409514fc93442500010b ] (how-good-are-you-really)
//+ URL: https://www.codewars.com/kata/5601409514fc93442500010b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { betterThanAverage } = require("./howGoodAreYouReally")

describe("Basic Tests", function () {
  it("betterThanAverage([2, 3], 5) should return True", function () {
    assert.strictEqual(betterThanAverage([2, 3], 5), true)
  })

  it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function () {
    assert.strictEqual(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true)
  })

  it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69) should return True", function () {
    assert.strictEqual(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69), true)
  })

  it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False", function () {
    assert.strictEqual(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false)
  })

  it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False", function () {
    assert.strictEqual(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false)
  })
})

describe("Random Tests", function () {
  function solution(classPoints, yourPoints) {
    return classPoints.reduce((acc, points) => acc + points - yourPoints, 0) < 0
  }

  for (let i = 0; i < 40; ++i) {
    let arr = Array.from({ length: 50 }, () => ~~(Math.random() * 100))
    let points = ~~(Math.random() * 100)
    let result = solution(arr, points)
    it(`betterThanAverage(${arr}, ${points}) should return False`, function () {
      assert.strictEqual(betterThanAverage(arr.slice(), points), result, `Failed for ${arr}`)
    })
  }
})
