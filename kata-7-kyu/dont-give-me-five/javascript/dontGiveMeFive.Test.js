//+ ====================================================================================================================
//+
//+ 7 kyu - Don't give me five!  [ ID: 5813d19765d81c592200001a ] (dont-give-me-five)
//+ URL: https://www.codewars.com/kata/5813d19765d81c592200001a
//+ Category: ALGORITHMS  |  Tags: MATHEMATICS | ARRAYS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { dontGiveMeFive } = require("./dontGiveMeFive")

describe("KataTests", function () {
  it("exampleTests", function () {
    assert.strictEqual(dontGiveMeFive(1, 9), 8)
    assert.strictEqual(dontGiveMeFive(4, 17), 12)
  })
  it("moreTests", function () {
    assert.strictEqual(dontGiveMeFive(1, 90), 72)
    assert.strictEqual(dontGiveMeFive(-4, 17), 20)
    assert.strictEqual(dontGiveMeFive(-4, 37), 38)
    assert.strictEqual(dontGiveMeFive(-14, -1), 13)
    assert.strictEqual(dontGiveMeFive(-14, -6), 9)
  })
  it("randomTests", function () {
    for (let r = 0; r < 30; r++) {
      let start = Math.floor(Math.random() * 110 - 50)
      let end = Math.floor(Math.random() * (80 - start - 1) + start + 1)

      let expectedCount = 0
      for (let i = start; i <= end; i++) {
        if (!(i + "").includes("5")) {
          expectedCount++
        }
      }

      assert.strictEqual(dontGiveMeFive(start, end), expectedCount)
    }
  })
})
