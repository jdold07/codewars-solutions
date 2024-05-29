//+ ====================================================================================================================
//+
//+ 6 kyu - Duplicate Encoder  [ ID: 54b42f9314d9229fd6000d9c ] (duplicate-encoder)
//+ URL: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
//+ Category: REFERENCE  |  Tags: STRINGS | ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { duplicateEncode } from "./duplicateEncoder"

// TODO Add your tests here
describe("Duplicate Encoder", function () {
  it("Basic tests:", function () {
    assert.strictEqual(duplicateEncode("din"), "(((")
    assert.strictEqual(duplicateEncode("recede"), "()()()")
    assert.strictEqual(duplicateEncode("Success"), ")())())", "should ignore case")
    assert.strictEqual(duplicateEncode("CodeWarrior"), "()(((())())")
    assert.strictEqual(duplicateEncode("Supralapsarian"), ")()))()))))()(", "should ignore case")
    assert.strictEqual(duplicateEncode("iiiiii"), "))))))", "duplicate-only-string")
  })

  it("Tests with '(' and ')'", function () {
    assert.strictEqual(duplicateEncode("(( @"), "))((")
    assert.strictEqual(duplicateEncode(" ( ( )"), ")))))(")
  })

  it("And now... some random tests !", function () {
    const rndEncode = function () {
      const chars = "abcdeFGHIJklmnOPQRSTuvwxyz() @!"
        .split("")
        .sort(function () {
          return Math.random() > 0.5 ? 1 : -1
        })
        .join("")
      let enc = ""
      let src = ""
      let count = 0
      const len = 10 + ~~(Math.random() * 10)
      const dup = chars[chars.length - 1]
      for (let c = 0; c < len; c++) {
        if (Math.random() > 0.5) {
          enc += "("
          src += chars[c]
        } else {
          enc += ")"
          src += dup
          count++
        }
      }
      // Chrono79's intent to fix the random quirk
      // It happened because the duplicate char was inserted only once so it wasn't a duplicate at all.
      // So I add it once more to fix it
      if (count === 1) {
        enc += ")"
        src += dup
      }
      return { src: src, res: enc }
    }

    let t = 5
    while (t--) {
      const tst = rndEncode()
      assert.strictEqual(duplicateEncode(tst.src), tst.res, "should encode '" + tst.src + "'")
    }
  })
})
