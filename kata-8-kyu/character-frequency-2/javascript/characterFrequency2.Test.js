//+ ====================================================================================================================
//+
//+ 8 kyu - Character Frequency  [ ID: 548ef5b7f33a646ea50000b2 ] (character-frequency-2)
//+ URL: https://www.codewars.com/kata/548ef5b7f33a646ea50000b2
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

const { randomToken } = require("../../../utils/cwUtils")
import { assert, expect } from "vitest"
const { charFreq } = require("./characterFrequency2")

function cf(message) {
  let result = {}
  message.split("").forEach(function (letter) {
    result[letter] = result[letter] ? result[letter] + 1 : 1
  })
  return result
}

it("Basic tests", function () {
  let basicTests = [
    "How can mirrors be real when our eyes aren't real?",
    "Everybody dance now!",
    "Can I haz cheezburger?",
    "Everybody do the flop!",
    "Io sono giovanni rana!",
    "It's-a me, Mario!",
    "The End ( of the line ) "
  ]
  basicTests.forEach(function (str) {
    console.info("Testing: ", str)
    assert.deepEqual(charFreq(str), cf(str))
  })
  expect(true)
})

it("Random tests", function () {
  let str
  for (let i = 0; i < 100; i++) {
    str = randomToken() + " " + randomToken()
    console.info("Testing: ", str)
    assert.deepEqual(charFreq(str), cf(str))
  }
})
