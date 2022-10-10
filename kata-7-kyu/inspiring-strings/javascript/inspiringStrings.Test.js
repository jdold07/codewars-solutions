//+ ====================================================================================================================
//+
//+ 7 kyu - Inspiring Strings  [ ID: 5939ab6eed348a945f0007b2 ] (inspiring-strings)
//+ URL: https://www.codewars.com/kata/5939ab6eed348a945f0007b2
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomToken } = require("../../../utils/cwUtils")
const { assert } = require("chai")
const { longestWord } = require("./inspiringStrings")

it("Tests", () => {
  assert.strictEqual(longestWord("a b c d each"), "each")
  assert.strictEqual(longestWord("each step"), "step")
  assert.strictEqual(longestWord("forward each step going"), "forward")
  assert.strictEqual(longestWord("brings each step going"), "brings")
  assert.strictEqual(longestWord("brings each opportunity step going"), "opportunity")

  for (let i = 0; i < 25; i++) {
    let word = randomToken() + " " + randomToken()
    assert.strictEqual(longestWord(word), checkSolution(word))
  }

  function checkSolution(strings) {
    let stringArr = strings.split(" ")
    let wordBank = ""
    stringArr.map((word) => {
      if (word.length >= wordBank.length) {
        wordBank = word
      }
    })
    return wordBank
  }
})
