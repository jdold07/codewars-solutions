// 8 kyu - Sentence Smash  [ ID: 53dc23c68a0c93699800041d  (sentence-smash) ]
// URL: https://www.codewars.com/kata/53dc23c68a0c93699800041d
// Category: REFERENCE  |  Tags: STRINGS | ARRAYS | FUNDAMENTALS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("smash", () => {
  it("Should return empty string for empty array.", () => {
    assert.strictEqual(smash([]), "")
  })

  it("One word example should return the word.", () => {
    assert.strictEqual(smash(["hello"]), "hello")
  })

  it("Multiple words should be separated by spaces.", () => {
    assert.strictEqual(smash(["hello", "world"]), "hello world")
    assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world")
    assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence")
  })

  it("Random tests", () => {
    const s = "abcdefghijklmnopqrstuvwxyz"

    function randint(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    for (let i = 0; i < 100; i++) {
      let word = Array.from(
        { length: randint(0, 15) },
        (_, i) => Array.from({ length: randint(1, 15) }, (_, j) => s[randint(0, s.length - 1)]).join``
      )
      let expected = word.join` `
      assert.strictEqual(smash(word), expected, `Testing for words = ${JSON.stringify(word)}`)
    }
  })
})
