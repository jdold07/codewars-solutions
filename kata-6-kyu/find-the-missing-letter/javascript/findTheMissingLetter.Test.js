//+ ====================================================================================================================
//+
//+ 6 kyu - Find the missing letter  [ ID: 5839edaa6754d6fec10000a2 ] (find-the-missing-letter)
//+ URL: https://www.codewars.com/kata/5839edaa6754d6fec10000a2
//+ Category: ALGORITHMS  |  Tags: MATHEMATICS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { findMissingLetter } = require("./findTheMissingLetter")

describe("KataTests", function () {
  it("exampleTests", function () {
    assert.strictEqual(findMissingLetter(["a", "b", "c", "d", "f"]), "e")
    assert.strictEqual(findMissingLetter(["O", "Q", "R", "S"]), "P")
  })
  it("randomTest", function () {
    for (let r = 0; r < 30; r++) {
      let len = Math.floor(Math.random() * 7 + 3)
      let missingIdx = Math.floor(Math.random() * (len - 2) + 1)
      let start = Math.floor(Math.random() * (90 - len - 65) + 65)

      if (Math.random() > 0.5) {
        start += 32
      }

      let missing = String.fromCharCode(start + missingIdx)
      let array = []

      for (let i = 0; i < len; i++) {
        if (i != missingIdx) {
          array.push(String.fromCharCode(start + i))
        }
      }

      console.log("Array: " + array.join(","))

      assert.strictEqual(findMissingLetter(array), missing)
    }
  })
})
