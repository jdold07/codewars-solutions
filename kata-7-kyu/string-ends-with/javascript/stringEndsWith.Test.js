//+ ====================================================================================================================
//+
//+ 7 kyu - String ends with?  [ ID: 51f2d1cafc9c0f745c00037d ] (string-ends-with)
//+ URL: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { solution } = require("./stringEndsWith")

describe("Tests", () => {
  it("test", () => {
    function check(str, ending, expected) {
      let result = solution(str, ending)
      assert.strictEqual(result, expected, "Expected solution('" + str + "', '" + ending + "') to return " + expected)
    }

    check("samurai", "ai", true)
    check("sumo", "omo", false)
    check("ninja", "ja", true)
    check("sensei", "i", true)
    check("samurai", "ra", false)
    check("abc", "abcd", false)
    check("abc", "abc", true)
    check("abcabc", "bc", true)
    check("ails", "fails", false)
    check("fails", "ails", true)
    check("this", "fails", false)
    check("abc", "", true)
    check(":-)", ":-(", false)
    check("!@#$%^&*() :-)", ":-)", true)
  })
})
