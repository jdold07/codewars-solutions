//+ ====================================================================================================================
//+
//+ 6 kyu - Detect Pangram  [ ID: 545cedaa9943f7fe7b000048 ] (detect-pangram)
//+ URL: https://www.codewars.com/kata/545cedaa9943f7fe7b000048
//+ Category: REFERENCE  |  Tags: STRINGS | DATA STRUCTURES | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { isPangram } = require("./detectPangram")

let pangram = "The quick brown fox jumps over the lazy dog."
describe("Example Tests", function () {
  it("Is 'The quick brown fox jumps over the lazy dog.' a pangram?", function () {
    assert.strictEqual(isPangram(pangram), true)
  })
})

describe("Some tests in random order:", function () {
  let pangrams = [
    // not pangrams:
    [
      "This isn't a pangram!",
      "abcdefghijklmopqrstuvwxyz ",
      "aaaaaaaaaaaaaaaaaaaaaaaaaa",
      "Detect Pangram",
      "A pangram is a sentence that contains every single letter of the alphabet at least once."
    ],

    // pangrams:
    [
      "Cwm fjord bank glyphs vext quiz",
      "Pack my box with five dozen liquor jugs.",
      "How quickly daft jumping zebras vex.",
      "ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ",
      "AbCdEfGhIjKlM zYxWvUtSrQpOn"
    ]
  ]

  let order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort(function () {
    return Math.random() > 0.5
  })
  order.forEach(function (o) {
    let exp = o > 4
    o = o % 5
    let str = pangrams[+exp][o]
    let missing = "abcdefghijklmnopqrstuvwxyz".split("").filter(function (c) {
      return str.toLowerCase().indexOf(c) < 0
    })
    it("Is '" + str + "' a pangram?", function () {
      assert.strictEqual(
        isPangram(str),
        exp,
        str + " is " + ["not ", ""][+exp] + "a pangram" + (missing.length ? " (" + missing + " missing)" : "")
      )
    })
  })
})
