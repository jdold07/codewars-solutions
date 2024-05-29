//+ ====================================================================================================================
//+
//+ 6 kyu - Split Strings  [ ID: 515de9ae9dcfc28eb6000001 ] (split-strings)
//+ URL: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
//+ Category: ALGORITHMS  |  Tags: REGULAR EXPRESSIONS | STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { solution } = require("./splitStrings")

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"])
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"])
    assert.deepEqual(solution(""), [])
  })

  it("Random tests", () => {
    function sol(str) {
      let pairs = str.match(/.{1,2}/g)
      if (pairs && pairs[pairs.length - 1].length == 1) {
        pairs[pairs.length - 1] += "_"
      }
      return pairs || []
    }
    for (let i = 0; i < 100; i++) {
      const s = Array(0 | (Math.random() * 50 + 1))
        .fill()
        .map(() => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[(Math.random() * 52) | 0]).join``
      assert.deepEqual(solution(s), sol(s))
    }
  })
})
