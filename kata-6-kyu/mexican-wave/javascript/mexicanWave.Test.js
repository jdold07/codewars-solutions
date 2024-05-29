//+ ====================================================================================================================
//+
//+ 6 kyu - Mexican Wave  [ ID: 58f5c63f1e26ecda7e000029 ] (mexican-wave)
//+ URL: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
//+ Category: REFERENCE  |  Tags: ARRAYS | STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { wave } = require("./mexicanWave")

describe("Testing...", function () {
  it("Basic tests", () => {
    let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
    assert.deepEqual(wave("hello"), result, "Should return: '" + result + "'")

    result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
    assert.deepEqual(wave("codewars"), result, "Should return: '" + result + "'")

    result = []
    assert.deepEqual(wave(""), result, "Should return: '" + result + "'")

    result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
    assert.deepEqual(wave("two words"), result, "Should return: '" + result + "'")

    result = [" Gap ", " gAp ", " gaP "]
    assert.deepEqual(wave(" gap "), result, "Should return: '" + result + "'")
  })

  it("Random tests", () => {
    function wave2(str) {
      let result = []
      str = str.split("")
      for (let b = 0; b < str.length; b++) {
        if (str[b] !== " ") {
          let temp = []
          for (let i = 0; i < str.length; i++) {
            if (i === b) {
              temp.push(str[i].toUpperCase())
            } else {
              temp.push(str[i])
            }
          }
          result.push(temp.join(""))
        }
      }
      return result
    }
    let letters = "abcd efghi jklmno pqrstu vwxyz".split("")
    for (let cwtests = 0; cwtests < 96; cwtests++) {
      let word = []
      let word2 = []
      for (let wordnum = 0, m = Math.floor(Math.random() * 100); wordnum < m; wordnum++) {
        const l = letters[Math.floor(Math.random() * letters.length)]
        word.push(l)
        word2.push(l)
      }
      word = word.join("")
      word2 = word2.join("")
      const exp = wave2(word2)
      assert.deepEqual(wave(word), exp)
    }
  })
})
