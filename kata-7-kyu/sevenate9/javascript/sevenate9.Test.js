//+ ====================================================================================================================
//+
//+ 7 kyu - SevenAte9  [ ID: 559f44187fa851efad000087 ] (sevenate9)
//+ URL: https://www.codewars.com/kata/559f44187fa851efad000087
//+ Category: REFERENCE  |  Tags: LOGIC | STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { sevenAte9 } = require("./sevenate9")

const test = (input, expected, message) => {
  it(`"${input}"`, () => {
    assert.strictEqual(sevenAte9(input), expected, message)
  })
}

describe("Fixed tests", () => {
  const tests = [
    ["797", "77"],
    ["7979797", "7777"],
    ["165561786121789797", "16556178612178977"],
    ["16797", "1677"],
    ["77", "77"],
    ["7927", "7927"],
    ["1779", "1779"],
    ["a779", "a779"],
    ["17797a", "1777a"],
    ["797 9 7", "77 9 7"],
    ["79799997", "7799997"],
    ["79", "79"],
    ["97", "97"],
    ["", ""]
  ]
  for (const [input, expected] of tests) {
    test(input, expected)
  }
})

describe("Random tests", () => {
  const randomInt = (a, b) => Math.trunc(Math.random() * (b - a + 1) + a)

  for (let i = 0; i < 40; i++) {
    const chars = Array.from({ length: randomInt(1, 8) }, () => {
      const r = Math.random()
      if (r < 0.25) return "7" + "9".repeat(randomInt(2, 4)) + "7"
      if (r < 0.5) return "7" + "97".repeat(randomInt(1, 8))
      return Array.from({ length: randomInt(1, 8) }, () => randomInt(0, 9)).join("")
    })

    const input = chars.join("")
    const expected = input.replace(/(?<=7)9(?=7)/g, "")
    test(input, expected)
  }
})
