//+ ====================================================================================================================
//+
//+ 7 kyu - You're a square!  [ ID: 54c27a33fb7da0db0100040e ] (youre-a-square)
//+ URL: https://www.codewars.com/kata/54c27a33fb7da0db0100040e
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

const { randomNumber } = require("../../../utils/cwUtils")
import { assert, expect } from "vitest"
const { isSquare } = require("./youreASquare")

describe("isSquare", function () {
  it("should work for some examples", function () {
    assert.strictEqual(isSquare(-1), false, "-1: Negative numbers cannot be square numbers")
    assert.strictEqual(isSquare(0), true, "0 is a square number (0 * 0)")
    assert.strictEqual(isSquare(3), false, "3 is not a square number")
    assert.strictEqual(isSquare(4), true, "4 is a square number (2 * 2)")
    assert.strictEqual(isSquare(25), true, "25 is a square number (5 * 5)")
    assert.strictEqual(isSquare(26), false, "26 is not a square number")
  })
  it("should work for random square numbers", function () {
    let r, i
    for (i = 0; i < 100; ++i) {
      r = (Math.random() * 0xfff0) | 0
      expect(isSquare(r * r), `${r * r} is a square number (${r} * ${r})`)
    }
  })
  it("should work for random numbers", function () {
    let r,
      i,
      solution = function (n) {
        if (n < 0) return false
        return n === Math.pow(Math.round(Math.sqrt(n)), 2)
      }
    r = randomNumber()
    assert.strictEqual(isSquare(r), solution(r), "Your answer was wrong for " + r)

    for (i = 0; i < 1000; ++i) {
      r = randomNumber()
      if (isSquare(r) !== solution(r)) {
        // only post a single test, all 1000 take too much bandwith
        assert.strictEqual(isSquare(r), solution(r), "Your answer was wrong for " + r)
        break
      }
    }
  })
})
