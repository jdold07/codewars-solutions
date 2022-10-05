// 7 kyu - Alternate case  [ ID: 57a62154cf1fa5b25200031e  (alternate-case) ]
// URL: https://www.codewars.com/kata/57a62154cf1fa5b25200031e
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const _ = require("lodash")

const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Alternate case", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(alternateCase("abc"), "ABC")
    assert.strictEqual(alternateCase("ABC"), "abc")
    assert.strictEqual(alternateCase("Hello World"), "hELLO wORLD")
    assert.strictEqual(alternateCase("CodeWars"), "cODEwARS")
    assert.strictEqual(alternateCase("i LIKE MAKING KATAS VERY MUCH!"), "I like making katas very much!")
  })

  it("Small Random Tests", () => {
    const CHARS = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789~!@#$%^&* "
    const rand831 = () => [...Array(_.random(10, 50))].map(() => CHARS[_.random(0, CHARS.length - 1)]).join``
    const sol482 = (s) => s.replace(/./g, (c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))

    for (let i = 0; i < 50; ++i) {
      let word = rand831()
      assert.strictEqual(alternateCase(word), sol482(word), `Input: ${JSON.stringify(word)}`)
    }
  })
})
