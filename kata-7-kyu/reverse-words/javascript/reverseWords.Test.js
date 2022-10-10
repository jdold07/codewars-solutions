//+ ====================================================================================================================
//+
//+ 7 kyu - Reverse words  [ ID: 5259b20d6021e9e14c0010d4 ] (reverse-words)
//+ URL: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { reverseWords } = require("./reverseWords")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(
      reverseWords("The quick brown fox jumps over the lazy dog."),
      "ehT kciuq nworb xof spmuj revo eht yzal .god"
    )
    assert.strictEqual(reverseWords("apple"), "elppa")
    assert.strictEqual(reverseWords("a b c d"), "a b c d")
    assert.strictEqual(reverseWords("double  spaced  words"), "elbuod  decaps  sdrow")
    assert.strictEqual(reverseWords("stressed desserts"), "desserts stressed")
    assert.strictEqual(reverseWords("hello hello"), "olleh olleh")
  })
})

describe("Random Tests", () => {
  const _ = require("lodash")

  let words = [
    "Kata",
    "should",
    "always",
    "have",
    "random",
    "tests",
    "case",
    "to",
    "avoid",
    "hardocoded",
    "solution.",
    "This",
    "is",
    "a",
    "rule!"
  ]

  it("Testing for 100 random tests", () => {
    for (let i = 0; i < 40; i++) {
      let str = _.shuffle(words)
          .slice(0, Math.random() * words.length + 1)
          .join(" ".repeat(Math.floor(Math.random() * 2) + 1)),
        exp = str
          .split(" ")
          .map(function (word) {
            return word.split("").reverse().join("")
          })
          .join(" ")
      assert.strictEqual(reverseWords(str), exp, `Testing for ${JSON.stringify(str)}`)
    }
  })
})
