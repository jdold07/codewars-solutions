//+ ====================================================================================================================
//+
//+ 8 kyu - MakeUpperCase  [ ID: 57a0556c7cb1f31ab3000ad7 ] (makeuppercase)
//+ URL: https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { makeUpperCase } = require("./makeuppercase")

describe("Extra Tests", function () {
  it("should pass the basic tests", function () {
    assert.strictEqual(makeUpperCase("hello"), "HELLO")
    assert.strictEqual(makeUpperCase("hello world"), "HELLO WORLD")
    assert.strictEqual(makeUpperCase("hello world !"), "HELLO WORLD !")
    assert.strictEqual(makeUpperCase("heLlO wORLd !"), "HELLO WORLD !")
    assert.strictEqual(makeUpperCase("1,2,3 hello world!"), "1,2,3 HELLO WORLD!")
  })
})
describe("Random Tests", function () {
  const letters = "abcdefgh ijklmnopq rstuvwxyz ABCDEFGHIJ QLMNOPQRSTUVWXYZ 1234567890!"
  for (let i = 0; i < 100; i++) {
    const word = Array.from(
      { length: Math.floor(Math.random() * 99) + 1 },
      () => letters[Math.floor(Math.random() * letters.length)]
    ).join("")
    const exp = word.toUpperCase()
    it("Testing for " + word, function () {
      assert.strictEqual(makeUpperCase(word), exp)
    })
  }
})
