//+ ====================================================================================================================
//+
//+ 8 kyu - Expressions Matter   [ ID: 5ae62fcf252e66d44d00008e ] (expressions-matter)
//+ URL: https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
//+ Category: REFERENCE  |  Tags: ALGORITHMS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { expressionsMatter } from "./expressionsMatter"

describe("Fixed tests", function () {
  it("should work", function () {
    assert.equal(expressionsMatter(2, 1, 2), 6)
    assert.equal(expressionsMatter(2, 1, 1), 4)
    assert.equal(expressionsMatter(1, 1, 1), 3)
    assert.equal(expressionsMatter(1, 2, 3), 9)
    assert.equal(expressionsMatter(1, 3, 1), 5)
    assert.equal(expressionsMatter(2, 2, 2), 8)
    assert.equal(expressionsMatter(5, 1, 3), 20)
    assert.equal(expressionsMatter(3, 5, 7), 105)
    assert.equal(expressionsMatter(5, 6, 1), 35)
    assert.equal(expressionsMatter(1, 6, 1), 8)
    assert.equal(expressionsMatter(2, 6, 1), 14)
    assert.equal(expressionsMatter(6, 7, 1), 48)
    assert.equal(expressionsMatter(2, 10, 3), 60)
    assert.equal(expressionsMatter(1, 8, 3), 27)
    assert.equal(expressionsMatter(9, 7, 2), 126)
    assert.equal(expressionsMatter(1, 1, 10), 20)
    assert.equal(expressionsMatter(9, 1, 1), 18)
    assert.equal(expressionsMatter(10, 5, 6), 300)
    assert.equal(expressionsMatter(1, 10, 1), 12)
    assert.equal(expressionsMatter(3, 3, 3), 27)
  })
})

const solution = (a: number, b: number, c: number) =>
  Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c)

describe("Random tests", function () {
  it("100 random tests", function () {
    for (let i = 0; i < 100; i++) {
      const a = 1 + Math.floor(Math.random() * 10)
      const b = 1 + Math.floor(Math.random() * 10)
      const c = 1 + Math.floor(Math.random() * 10)
      assert.equal(expressionsMatter(a, b, c), solution(a, b, c))
    }
  })
})
