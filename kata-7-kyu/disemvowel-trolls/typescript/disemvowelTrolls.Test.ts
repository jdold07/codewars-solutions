//+ ====================================================================================================================
//+
//+ 7 kyu - Disemvowel Trolls  [ ID: 52fba66badcd10859f00097e ] (disemvowel-trolls)
//+ URL: https://www.codewars.com/kata/52fba66badcd10859f00097e
//+ Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { Kata } from "./disemvowelTrolls"

describe("disemvowel", function () {
  it("should pass a sample test", function () {
    assert.strictEqual(Kata.disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
  })

  it("should pass some fixed tests", function () {
    assert.strictEqual(
      Kata.disemvowel("No offense but,\nYour writing is among the worst I've ever read"),
      "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
    )
    assert.strictEqual(Kata.disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
  })

  it("should pass some random tests", function () {
    for (let i = 0; i < 100; ++i) {
      const str = [...Array(~~(Math.random() * 300))].map(() => String.fromCharCode(~~(Math.random() * 256))).join("")

      const actual = Kata.disemvowel(str)
      const expected = str.replace(/[aeiou]/gi, "")

      assert.strictEqual(actual, expected)
    }
  })
})
