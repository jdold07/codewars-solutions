//+ ====================================================================================================================
//+
//+ 8 kyu - Grasshopper - Summation  [ ID: 55d24f55d7dd296eb9000030 ] (grasshopper-summation)
//+ URL: https://www.codewars.com/kata/55d24f55d7dd296eb9000030
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomNumber } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { summation } = require("./grasshopperSummation")

describe("summation", function () {
  it("should return the correct total", function () {
    assert.strictEqual(summation(1), 1)
    assert.strictEqual(summation(8), 36)
    assert.strictEqual(summation(22), 253)
    assert.strictEqual(summation(100), 5050)
    assert.strictEqual(summation(213), 22791)
  })
  it("random numbers test", function () {
    for (let i = 0; i < 100; i++) {
      let rand = randomNumber() + 1
      assert.strictEqual(summation(rand), solution(rand))
    }
  })
  function solution(num) {
    let total = 0
    for (let i = 1; i <= num; i++) {
      total += i
    }
    return total
  }
})
