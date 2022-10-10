//+ ====================================================================================================================
//+
//+ 6 kyu - String transformer  [ ID: 5878520d52628a092f0002d0 ] (string-transformer)
//+ URL: https://www.codewars.com/kata/5878520d52628a092f0002d0
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomNumber, randomToken } = require("../../../utils/cwUtils")
const { assert } = require("chai")
const { stringTransformer } = require("./stringTransformer")

const _ = require("lodash")

describe("Your Solution", function () {
  it("should work for fixed tests", function () {
    assert.strictEqual(stringTransformer("Example Input"), "iNPUT eXAMPLE", "Should convert Example Input")
    assert.strictEqual(stringTransformer(""), "", "Should handle empty string")
    assert.strictEqual(
      stringTransformer("To be OR not to be That is the Question"),
      "qUESTION THE IS tHAT BE TO NOT or BE tO"
    )
    assert.strictEqual(
      stringTransformer("You Know When  THAT  Hotline Bling"),
      "bLING hOTLINE  that  wHEN kNOW yOU",
      "Should handle multiple spaces"
    )
    assert.strictEqual(stringTransformer(" A b C d E f G "), " g F e D c B a ", "Should handle leading space")
  })

  it("should work for random tests", function () {
    function generateRandomInput() {
      let length = randomNumber() % 10
      let words = []

      for (let index = 0; index < length; index++) {
        if (_.random(0, 10) < 5) words.push(" ")
        let word = randomToken().replace(/[^a-zA-Z]/g, "")
        word = word.charAt(0).toUpperCase() + word.slice(1)
        words.push(word)
        if (_.random(0, 10) < 5) words.push(" ")
      }

      return words.join(" ")
    }

    function changeCase(match, lower, upper) {
      return lower ? lower.toUpperCase() : upper.toLowerCase()
    }

    for (let i = 0; i < 100; i++) {
      let randomInput = generateRandomInput()
      let expected = randomInput
        .replace(/([a-z]+)|([A-Z]+)/g, changeCase)
        .split(" ")
        .reverse()
        .join(" ")
      let actual = stringTransformer(randomInput)

      assert.strictEqual(actual, expected)
    }
  })
})
