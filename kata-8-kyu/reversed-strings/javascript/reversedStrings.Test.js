//+ ====================================================================================================================
//+
//+ 8 kyu - Reversed Strings  [ ID: 5168bb5dfe9a00b126000018 ] (reversed-strings)
//+ URL: https://www.codewars.com/kata/5168bb5dfe9a00b126000018
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { solution } = require("./reversedStrings")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution("world"), "dlrow")
    assert.strictEqual(solution("hello"), "olleh")
    assert.strictEqual(solution(""), "")
    assert.strictEqual(solution("h"), "h")
  })
})

describe("Random tests", () => {
  const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ   "

  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  it("Testing for 100 random tests", () => {
    for (let i = 0; i < 100; i++) {
      let word = Array.from({ length: randint(0, 20) }, () => s[randint(0, s.length - 1)]).join``
      let expected = [...word].reverse().join``
      assert.strictEqual(
        solution(word),
        expected,
        `solution(${JSON.stringify(word)}) should equal ${JSON.stringify(expected)}`
      )
    }
  })
})
