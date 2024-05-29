//+ ====================================================================================================================
//+
//+ 8 kyu - Grader  [ ID: 53d16bd82578b1fb5b00128c ] (grader)
//+ URL: https://www.codewars.com/kata/53d16bd82578b1fb5b00128c
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { grader } = require("./grader")

describe("Solution", function () {
  it("should pass some fixed tests", function () {
    assert.strictEqual(grader(1), "A")
    assert.strictEqual(grader(1.01), "F")
    assert.strictEqual(grader(0.2), "F")
    assert.strictEqual(grader(0.7), "C")
    assert.strictEqual(grader(0.8), "B")
    assert.strictEqual(grader(0.9), "A")
    assert.strictEqual(grader(0.6), "D")
    assert.strictEqual(grader(0.5), "F")
    assert.strictEqual(grader(0), "F")
  })

  it("should pass some random tets", function () {
    const tests = 100

    for (let i = 0; i < tests; ++i) {
      let test = Math.random() * 1.5
      assert.strictEqual(grader(test), solution(test))
    }
  })
})

function solution(score) {
  if (score <= 1) {
    if (score >= 0.9) {
      return "A"
    } else if (score >= 0.8) {
      return "B"
    } else if (score >= 0.7) {
      return "C"
    } else if (score >= 0.6) {
      return "D"
    } else if (score < 0.6) {
      return "F"
    }
  } else {
    return "F"
  }
}
