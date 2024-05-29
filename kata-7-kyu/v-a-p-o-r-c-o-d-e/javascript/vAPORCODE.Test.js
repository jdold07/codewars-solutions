//+ ====================================================================================================================
//+
//+ 7 kyu - V     A     P     O     R     C     O     D     E  [ ID: 5966eeb31b229e44eb00007a ] (v-a-p-o-r-c-o-d-e)
//+ URL: https://www.codewars.com/kata/5966eeb31b229e44eb00007a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { vaporcode } = require("./vAPORCODE")

describe("V  A  P  O  R  C  O  D  E", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(vaporcode("Lets go to the movies"), "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S")
    assert.strictEqual(vaporcode("Why isnt my code working"), "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G")
  })

  it("Tests randomly generated strings", () => {
    // random number generator
    let randNum = function (min, max) {
      let diff = max - min
      return Math.ceil(Math.random() * diff + min)
    }
    // random string generator
    let newStr = function () {
      let newString = ""
      // let numWords = randNum(1, 10)
      for (let i = 0; i < 500; i++) {
        let numChar = randNum(1, 10)
        let newWord = ""
        for (let j = 0; j < numChar; j++) {
          newWord = newWord.concat(String.fromCharCode(randNum(97, 122)))
        }
        newString = newString.concat(newWord + " ")
      }
      return newString
    }
    // my solution
    function myVaporcode(string) {
      return string.toUpperCase().split(" ").join("").split("").join("  ")
    }
    for (let i = 0; i < 25; i++) {
      let randomStr = newStr()
      assert.strictEqual(vaporcode(randomStr), myVaporcode(randomStr), `Tesing for string = ${JSON.stringify(randomStr)}`)
    }
  })
})
