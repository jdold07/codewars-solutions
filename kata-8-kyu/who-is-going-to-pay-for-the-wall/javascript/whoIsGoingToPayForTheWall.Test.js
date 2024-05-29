//+ ====================================================================================================================
//+
//+ 8 kyu - Who is going to pay for the wall?  [ ID: 58bf9bd943fadb2a980000a7 ] (who-is-going-to-pay-for-the-wall)
//+ URL: https://www.codewars.com/kata/58bf9bd943fadb2a980000a7
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { whoIsPaying } = require("./whoIsGoingToPayForTheWall")

it("Basic tests", () => {
  assert.deepEqual(whoIsPaying("Mexico"), ["Mexico", "Me"])
  assert.deepEqual(whoIsPaying("Melania"), ["Melania", "Me"])
  assert.deepEqual(whoIsPaying("Melissa"), ["Melissa", "Me"])
  assert.deepEqual(whoIsPaying("Me"), ["Me"])
  assert.deepEqual(whoIsPaying(""), [""])
  assert.deepEqual(whoIsPaying("I"), ["I"])
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a
  const sol = (s) => (s.length > 2 ? [s, s.slice(0, 2)] : [s])
  const base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  for (let i = 0; i < 40; i++) {
    const s = [...Array(randint(1, 20))].map(() => base[randint(0, base.length - 1)]).join("")
    it(`Testing for '${s}'`, () => {
      assert.deepEqual(whoIsPaying(s), sol(s), "It should work for random inputs too")
    })
  }
})
