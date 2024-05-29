//+ ====================================================================================================================
//+
//+ 8 kyu - Man in the west  [ ID: 59bd5dc270a3b7350c00008b ] (man-in-the-west)
//+ URL: https://www.codewars.com/kata/59bd5dc270a3b7350c00008b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { checkTheBucket } = require("./manInTheWest")

describe("Basic tests", () => {
  it("Should work with basic tests", function () {

  assert.strictEqual(checkTheBucket(["stone", "stone", "stone", "stone", "stone"]), false)
  assert.strictEqual(checkTheBucket(["stone", "stone", "stone", "stone", "gold"]), true)
  assert.strictEqual(checkTheBucket(["gold", "stone", "stone", "stone", "stone"]), true)
  assert.strictEqual(checkTheBucket([]), false)
  assert.strictEqual(checkTheBucket(["stone", "stone", "stone", "gold", "gold"]), true)
})
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a
  const sol = (b) => b.includes("gold")

  for (let i = 0; i < 40; i++) {
    const b = Array.from({ length: randint(0, 60) }, () => (randint(0, 15) == 0 ? "gold" : "stone"))
    it(`Testing for ["${b.join('", "')}"]`, () => {
      assert.strictEqual(checkTheBucket(b), sol(b), "It should work for random inputs too")
    })
  }
})
