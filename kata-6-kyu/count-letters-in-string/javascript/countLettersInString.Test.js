//+ ====================================================================================================================
//+
//+ 6 kyu - Count letters in string  [ ID: 5808ff71c7cfa1c6aa00006d ] (count-letters-in-string)
//+ URL: https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { letterCount } = require("./countLettersInString")

describe("Basic tests", () => {
  it("Test", () => {
    assert.deepEqual(letterCount("codewars"), { a: 1, c: 1, d: 1, e: 1, o: 1, r: 1, s: 1, w: 1 })
    assert.deepEqual(letterCount("activity"), { a: 1, c: 1, i: 2, t: 2, v: 1, y: 1 })
    assert.deepEqual(letterCount("arithmetics"), { a: 1, c: 1, e: 1, h: 1, i: 2, m: 1, r: 1, s: 1, t: 2 })
    assert.deepEqual(letterCount("traveller"), { a: 1, e: 2, l: 2, r: 2, t: 1, v: 1 })
    assert.deepEqual(letterCount("daydreamer"), { a: 2, d: 2, e: 2, m: 1, r: 2, y: 1 })
  })
})

describe("Random Test", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
  const sol = (s, res = {}) => (s == "" ? res : sol(s.slice(1), Object.assign(res, { [s[0]]: (res[s[0]] || 0) + 1 })))
  const base = "abcdefghijklmnopqrstuvwxyz"

  for (let i = 0; i < 40; i++) {
    const s = Array.from({ length: randint(8, 25) }, () => base[randint(0, base.length - 1)]).join("")
    it(`Testing for '${s}'`, () => {
      assert.deepEqual(letterCount(s), sol(s), "It should work for random inputs too")
    })
  }
})
