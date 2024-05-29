//+ ====================================================================================================================
//+
//+ 4 kyu - Strip Comments  [ ID: 51c8e37cee245da6b40000bd ] (strip-comments)
//+ URL: https://www.codewars.com/kata/51c8e37cee245da6b40000bd
//+ Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

import { expect } from "vitest"
const { solution } = require("./stripComments")

describe("Tests", () => {
  it("test", () => {
    function checkComments(input, markers, expected) {
      var actual
      actual = solution(input, markers)
      return expect(
        actual === expected,
        "Returned '" + actual + "' but expected '" + expected + "'"
      )
    }

    checkComments(
      "apples, pears # and bananas\ngrapes\nbananas !apples",
      ["#", "!"],
      "apples, pears\ngrapes\nbananas"
    )
    checkComments("a #b\nc\nd $e f g", ["#", "$"], "a\nc\nd")
  })
})
