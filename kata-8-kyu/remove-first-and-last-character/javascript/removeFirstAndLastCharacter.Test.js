//+ ====================================================================================================================
//+
//+ 8 kyu - Remove First and Last Character  [ ID: 56bc28ad5bdaeb48760009b0 ] (remove-first-and-last-character)
//+ URL: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { removeChar } = require("./removeFirstAndLastCharacter")

describe("Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar("eloquent"), "loquen")
    assert.strictEqual(removeChar("country"), "ountr")
    assert.strictEqual(removeChar("person"), "erso")
    assert.strictEqual(removeChar("place"), "lac")
    assert.strictEqual(removeChar("ooopsss"), "oopss")
  })
})

describe("Random Tests", () => {
  function testSolution(str) {
    return (str = str.substring(1, str.length - 1))
  }

  it("Testing for 100 random tests", () => {
    for (let i = 0; i < 100; i++) {
      let possible = "abcdefghijklmnopqrstuvwxyz0123456789",
        text = ""
      for (let k = 0; k < ~~(Math.random() * 10) + 2; k++) {
        text += possible.charAt(~~(Math.random() * possible.length))
      }
      assert.strictEqual(removeChar(text), testSolution(text), `Testing for str = ${JSON.stringify(text)}`)
    }
  })
})
