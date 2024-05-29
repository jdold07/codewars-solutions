//+ ====================================================================================================================
//+
//+ 7 kyu - Find the next perfect square!  [ ID: 56269eb78ad2e4ced1000013 ] (find-the-next-perfect-square)
//+ URL: https://www.codewars.com/kata/56269eb78ad2e4ced1000013
//+ Category: REFERENCE  |  Tags: ALGEBRA | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { findNextSquare } = require("./findTheNextPerfectSquare")

describe("findNextSquare", function () {
  it("should return the next square for perfect squares", function () {
    assert.strictEqual(findNextSquare(121), 144, "Wrong output for 121")
    assert.strictEqual(findNextSquare(625), 676, "Wrong output for 625")
    assert.strictEqual(findNextSquare(319225), 320356, "Wrong output for 319225")
    assert.strictEqual(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936")
  })

  it("should return -1 for numbers which aren't perfect squares", function () {
    assert.strictEqual(findNextSquare(155), -1, "Wrong output for 155")
    assert.strictEqual(findNextSquare(342786627), -1, "Wrong output for 342786627")
  })

  it("should work for random inputs", function () {
    function solution(sq) {
      let root = Math.sqrt(sq)

      return root % 1 == 0 ? (root + 1) ** 2 : -1
    }

    for (let i = 0; i < 40; ++i) {
      let sq = ~~(Math.random() * 10 ** 5)

      if (Math.random() > 0.5) sq = sq * sq

      let message = `Wrong output for ${sq}`
      assert.strictEqual(findNextSquare(sq), solution(sq), message)
    }
  })
})
