//+ ====================================================================================================================
//+
//+ 7 kyu - Word values  [ ID: 598d91785d4ce3ec4f000018 ] (word-values)
//+ URL: https://www.codewars.com/kata/598d91785d4ce3ec4f000018
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { wordValue } = require("./wordValues")

describe("Word values", () => {
  it("simple examples", () => {
    assert.deepEqual(wordValue(["codewars", "abc", "xyz"]), [88, 12, 225])
    assert.deepEqual(wordValue(["abc abc", "abc abc", "abc", "abc"]), [12, 24, 18, 24])
  })
  it("detailed cases", () => {
    assert.deepEqual(wordValue(["abc", "abc", "abc", "abc"]), [6, 12, 18, 24])
    assert.deepEqual(wordValue(["abcdefghijklmnopqrstuvwxyz", "stamford bridge", "haskellers"]), [351, 282, 330])
    assert.deepEqual(wordValue(["i love coding", "better than pizza", "i got this"]), [115, 382, 321])
    assert.deepEqual(wordValue(["mercury", "venus", "earth mars", "jupiter saturn", "uranus neptune"]), [
      103,
      162,
      309,
      768,
      945
    ])
    assert.deepEqual(wordValue(["a cup", "some tea", "more coffee", "one glass"]), [41, 156, 273, 368])
    assert.deepEqual(wordValue(["a", "e", "i", "o", "u", "the end"]), [1, 10, 27, 60, 105, 336])
    assert.deepEqual(wordValue(["coding", "better pizza", "i got this too"]), [52, 296, 471])
  })
  const LETTERS = " abcdefghijklmnopqrstuvwxyz"
  const rnd = (n) => Math.floor(Math.random() * n)
  const randomString = (n) => Array.from({ length: rnd(n) }, () => LETTERS[rnd(LETTERS.length)]).join("")
  const randomArray = (n) => Array.from({ length: rnd(n) }, () => randomString(n))
  const referenceWordValue = (a) => a.map((v, i) => [].reduce.call(v, (acc, c) => acc + LETTERS.indexOf(c), 0) * (i + 1))
  it("small random sets", () => {
    for (let i = 100; i--; ) {
      const arg = [randomString(32)]
      const expected = referenceWordValue(arg)
      const actual = wordValue(arg)
      assert.deepEqual(actual, expected)
    }
  })
  it("larger random sets", () => {
    for (let i = 100; i--; ) {
      const arg = randomArray(128)
      const expected = referenceWordValue(arg)
      const actual = wordValue(arg)
      assert.deepEqual(actual, expected)
    }
  })
})
