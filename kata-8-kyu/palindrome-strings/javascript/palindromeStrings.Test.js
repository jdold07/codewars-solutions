//+ ====================================================================================================================
//+
//+ 8 kyu - Palindrome Strings  [ ID: 57a5015d72292ddeb8000b31 ] (palindrome-strings)
//+ URL: https://www.codewars.com/kata/57a5015d72292ddeb8000b31
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { isPalindrome } = require("./palindromeStrings")

describe("Random tests", function () {
  it("should work with random tests", function () {
    for (let j = 0; j < 200; j++) {
      let len = parseInt(Math.random() * 100 + 2)
      let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!_-.*@;,:"
      let word = ""
      let expected = Math.random() < 0.5
      for (let i = 0; i < len; i++) {
        word += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
      }
      expected = ("" + word).split("").reverse().join("") == word || expected
      assert.strictEqual(isPalindrome(word + (expected ? word.split("").reverse().join("") : "")), expected)
    }
  })
})
