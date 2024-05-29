//+ ====================================================================================================================
//+
//+ 7 kyu - Sum of all the multiples of 3 or 5  [ ID: 57f36495c0bb25ecf50000e7 ] (sum-of-all-the-multiples-of-3-or-5)
//+ URL: https://www.codewars.com/kata/57f36495c0bb25ecf50000e7
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { findSum } = require("./sumOfAllTheMultiplesOf3Or5")

describe("Tests", () => {
  it("test", () => {
    const solution = (n) =>
      Array.from({ length: n + 1 })
        .map((v, i) => i)
        .filter((x) => x % 3 === 0 || x % 5 === 0)
        .reduce((t, s) => t + s)

    assert.deepEqual(findSum(5), 8)
    assert.deepEqual(findSum(10), 33)
    assert.deepEqual(findSum(100), 2418)
    assert.deepEqual(findSum(1000), 234168)

    let rndNum = ~~(Math.random() * 100) * 100
    assert.deepEqual(findSum(rndNum), solution(rndNum))
  })
})
