//+ ====================================================================================================================
//+
//+ 7 kyu - You're a square!  [ ID: 54c27a33fb7da0db0100040e ] (youre-a-square)
//+ URL: https://www.codewars.com/kata/54c27a33fb7da0db0100040e
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { isSquare } from "./youreASquare"

import _ from "lodash"

describe("solution", function () {
  it("should work for some examples", function () {
    assert.isFalse(isSquare(-1))
    assert.isTrue(isSquare(0))
    assert.isFalse(isSquare(3))
    assert.isTrue(isSquare(4))
    assert.isTrue(isSquare(25))
    assert.isFalse(isSquare(26))
  })

  it("should work for random numbers", function () {
    // let r: number
    let i: number
    let tests: number[] = []
    for (i = 0; i < 100; ++i) {
      tests.push(((Math.random() * 0xfff0) | 0) ** 2)
      tests.push((Math.random() * 0xfffff0) | 0)
    }
    tests = _.shuffle(tests)

    const solution = function (n: number): boolean {
      if (n < 0) return false
      return Math.sqrt(n) % 1 === 0
    }

    for (const r of tests) {
      const exp = solution(r)
      assert.strictEqual(isSquare(r), exp)
    }
  })
})
