//+ ====================================================================================================================
//+
//+ 8 kyu - Find numbers which are divisible by given number  [ ID: 55edaba99da3a9c84000003b ] (find-numbers-which-are-divisible-by-given-number)
//+ URL: https://www.codewars.com/kata/55edaba99da3a9c84000003b
//+ Category: ALGORITHMS  |  Tags: ARRAYS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { divisibleBy } = require("./findNumbersWhichAreDivisibleByGivenNumber")

describe("Fixed tests", function () {
  it("should pass fixed tests", function () {
    assert.deepEqual(divisibleBy([1, 2, 3, 4, 5, 6], 2), [2, 4, 6])
    assert.deepEqual(divisibleBy([1, 2, 3, 4, 5, 6], 3), [3, 6])
    assert.deepEqual(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4), [0, 4])
  })
})

describe("Random tests", function () {
  it("should pass random tests", function () {
    for (let i = 0; i < 20; i++) {
      let randomDivisor = Math.floor(Math.random() * 10) + 1
      assert.deepEqual(
        divisibleBy([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], randomDivisor),
        (function (numbers, divisor) {
          return numbers.filter((number) => number % divisor === 0)
        })([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], randomDivisor)
      )
    }
  })
})
