//+ ====================================================================================================================
//+
//+ 8 kyu - Returning Strings  [ ID: 55a70521798b14d4750000a4 ] (returning-strings)
//+ URL: https://www.codewars.com/kata/55a70521798b14d4750000a4
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { greet } = require("./returningStrings")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?")
    assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?")
  })
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a
  const sol = (n) => `Hello, ${n} how are you doing today?`
  const base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  it("Testing for 40 random tests", () => {
    for (let i = 0; i < 40; i++) {
      const s = Array.from({ length: randint(1, 30) }, () => base[randint(0, base.length - 1)]).join("")
      assert.strictEqual(greet(s), sol(s), `Testing for ${JSON.stringify(s)}`)
    }
  })
})
