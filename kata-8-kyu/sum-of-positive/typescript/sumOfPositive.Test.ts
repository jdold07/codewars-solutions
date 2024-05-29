//+ ====================================================================================================================
//+
//+ 8 kyu - Sum of positive  [ ID: 5715eaedb436cf5606000381 ] (sum-of-positive)
//+ URL: https://www.codewars.com/kata/5715eaedb436cf5606000381
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { positiveSum } from "./sumOfPositive"

describe("solution", function () {
  it("Basic Tests", function () {
    assert.strictEqual(positiveSum([1, 2, 3, 4, 5]), 15)
    assert.strictEqual(positiveSum([1, -2, 3, 4, 5]), 13)
    assert.strictEqual(positiveSum([]), 0)
    assert.strictEqual(positiveSum([-1, -2, -3, -4, -5]), 0)
    assert.strictEqual(positiveSum([-1, 2, 3, 4, -5]), 9)
  })

  it("Random Tests", function () {
    function rand(l: number): number[] {
      const ran: number[] = []
      while (ran.length < l) {
        ran.push((Math.round(Math.random()) * 2 - 1) * Math.floor(Math.random() * 100 + 1))
      }
      return ran
    }
    let r: number[] = rand(8)
    assert.strictEqual(
      positiveSum(r),
      (r.filter(function (e) {
        return e > 0
      }).length > 0
        ? r.filter(function (e) {
            return e > 0
          })
        : [0]
      ).reduce(function (a, b) {
        return a + b
      })
    )
    r = rand(15)
    assert.strictEqual(
      positiveSum(r),
      (r.filter(function (e) {
        return e > 0
      }).length > 0
        ? r.filter(function (e) {
            return e > 0
          })
        : [0]
      ).reduce(function (a, b) {
        return a + b
      })
    )
    r = rand(60)
    assert.strictEqual(
      positiveSum(r),
      (r.filter(function (e) {
        return e > 0
      }).length > 0
        ? r.filter(function (e) {
            return e > 0
          })
        : [0]
      ).reduce(function (a, b) {
        return a + b
      })
    )
    r = rand(120)
    assert.strictEqual(
      positiveSum(r),
      (r.filter(function (e) {
        return e > 0
      }).length > 0
        ? r.filter(function (e) {
            return e > 0
          })
        : [0]
      ).reduce(function (a, b) {
        return a + b
      })
    )
  })
})
