//+ ====================================================================================================================
//+
//+ 6 kyu - Stop gninnipS My sdroW!  [ ID: 5264d2b162488dc400000001 ] (stop-gninnips-my-sdrow)
//+ URL: https://www.codewars.com/kata/5264d2b162488dc400000001
//+ Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { spinWords } = require("./stopGninnipsMySdrow")

describe("Spinning words", () => {
  function dotest(input, expected) {
    assert.strictEqual(spinWords(input), expected, `Incorrect answer for input="${input}"`)
  }

  it("Fixed tests", () => {
    dotest("Welcome", "emocleW")
    dotest("Hey fellow warriors", "Hey wollef sroirraw")
    dotest("This is a test", "This is a test")
    dotest("This is another test", "This is rehtona test")
    dotest("This sentence is a sentence", "This ecnetnes is a ecnetnes")
    dotest("You are almost to the last test", "You are tsomla to the last test")
    dotest("Just kidding there is still one more", "Just gniddik ereht is llits one more")
    dotest("Seriously this is the last one", "ylsuoireS this is the last one")
  })

  it("Random tests", () => {
    const refSpinWords = (s) =>
      s
        .split(" ")
        .map((s) => (s.length >= 5 ? s.split("").reverse().join("") : s))
        .join(" ")
    const rnd = (n) => Math.floor(Math.random() * n)
    const abc = "abcdefghijklmnopqrstuvwxyz"
    const rndWord = () => Array.from({ length: rnd(12) + 1 }, () => abc[rnd(abc.length)]).join("")
    const rndSentence = (i) => Array.from({ length: rnd(i) + 1 }, rndWord).join(" ")
    for (let i = 1; i <= 50; i++) {
      const s = rndSentence(i)
      const expected = refSpinWords(s)
      dotest(s, expected)
    }
  })
})
