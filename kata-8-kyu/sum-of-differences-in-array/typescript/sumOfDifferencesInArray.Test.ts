//+ ====================================================================================================================
//+
//+ 8 kyu - Sum of differences in array  [ ID: 5b73fe9fb3d9776fbf00009e ] (sum-of-differences-in-array)
//+ URL: https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { sumOfDifferences } from "./sumOfDifferencesInArray"

describe("Fixed tests", function () {
  it("sumOfDifferences([1, 2, 10])", function () {
    assert.equal(sumOfDifferences([1, 2, 10]), 9)
  })
  it("sumOfDifferences([-3, -2, -1])", function () {
    assert.equal(sumOfDifferences([-3, -2, -1]), 2)
  })
  it("sumOfDifferences([1, 1, 1, 1, 1])", function () {
    assert.equal(sumOfDifferences([1, 1, 1, 1, 1]), 0)
  })
  it("sumOfDifferences([-17, 17])", function () {
    assert.equal(sumOfDifferences([-17, 17]), 34)
  })
  it("sumOfDifferences([])", function () {
    assert.equal(sumOfDifferences([]), 0)
  })
  it("sumOfDifferences([0])", function () {
    assert.equal(sumOfDifferences([0]), 0)
  })
  it("sumOfDifferences([-1])", function () {
    assert.equal(sumOfDifferences([-1]), 0)
  })
  it("sumOfDifferences([1])", function () {
    assert.equal(sumOfDifferences([1]), 0)
  })
})
const randomArray = (n: number, bound: number) =>
  Array.from({ length: n }, () => -bound + Math.floor(Math.random() * 2 * bound))
const sumOfDifferencesTest = (arr: number[]) =>
  arr.length == 0 ? 0 : Math.max.apply(null, arr) - Math.min.apply(null, arr)
describe("Random tests", function () {
  for (let i = 0; i < 100; i++) {
    const n = Math.floor(Math.random() * 30)
    const bound = Math.floor(Math.random() * 30)
    const randomArr = randomArray(n, bound)

    it("Test for random array: [" + randomArr + "]", function () {
      assert.equal(sumOfDifferences(randomArr.slice()), sumOfDifferencesTest(randomArr))
    })
  }
})
