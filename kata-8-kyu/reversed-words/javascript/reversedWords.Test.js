//+ ====================================================================================================================
//+
//+ 8 kyu - Reversed Words  [ ID: 51c8991dee245d7ddf00000e ] (reversed-words)
//+ URL: https://www.codewars.com/kata/51c8991dee245d7ddf00000e
//+ Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert, expect } from "vitest"
const { reverseWords } = require("./reversedWords")

describe("reverseWords", function () {
  it("should work for some examples", function () {
    assert.strictEqual(reverseWords("hello world!"), "world! hello")
    assert.strictEqual(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda")
    assert.strictEqual(reverseWords("foobar"), "foobar")
    assert.strictEqual(reverseWords("kata editor"), "editor kata")
    assert.strictEqual(reverseWords("row row row your boat"), "boat your row row row")
  })
  it("should work for random strings", function () {
    let k,
      r,
      randomString = function (n) {
        let i,
          res = []
        for (i = 0; i < n; ++i) {
          res.push(String.fromCharCode(32 + ~~(Math.random() * 95)))
        }
        return res.join("").replace(/\s+/, " ")
      }
    for (k = 0; k < 40; ++k) {
      r = randomString(Math.random() * 300)
      expect(reverseWords(r) == r.split(" ").reverse().join(" "), r + " wasn't reversed correctly")
    }
  })
})
