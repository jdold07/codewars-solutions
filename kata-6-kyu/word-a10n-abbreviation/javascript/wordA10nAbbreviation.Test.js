//+ ====================================================================================================================
//+
//+ 6 kyu - Word a10n (abbreviation)  [ ID: 5375f921003bf62192000746 ] (word-a10n-abbreviation)
//+ URL: https://www.codewars.com/kata/5375f921003bf62192000746
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { abbreviate } = require("./wordA10nAbbreviation")

describe("Tests", () => {
  it("test", () => {
    function test(input, output) {
      assert.strictEqual(abbreviate(input), output, "Input: " + JSON.stringify(input))
    }

    test("internationalization", "i18n")
    test("accessibility", "a11y")
    test("Accessibility", "A11y")
    test("You need, need not want, to complete this code-wars mission", "You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n")

    let joins = [", ", "-", ": ", "; ", ". ", "'", "_", " ", "5"]
    let words = ["cat", "mat", "doggy", "balloon", "sits", "sat", "a", "is", "on", "the", "monolithic", "double-barreled"],
      wordsAbbreviated = ["cat", "mat", "d3y", "b5n", "s2s", "sat", "a", "is", "on", "the", "m8c", "d4e-b6d"]
    let input = ""
    let output = ""
    let wordIndex

    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < Math.random(); j += 0.1) {
        wordIndex = (Math.random() * joins.length) | 0
        if (input.length > 0) {
          input += " "
          output += " "
        }
        wordIndex = (Math.random() * words.length) | 0
        input += words[wordIndex]
        output += wordsAbbreviated[wordIndex]
      }
      test(input, output)
      input = ""
      output = ""
    }
  })
})
