//+ ====================================================================================================================
//+
//+ 8 kyu - If you can't sleep, just count sheep!!  [ ID: 5b077ebdaf15be5c7f000077 ] (if-you-cant-sleep-just-count-sheep)
//+ URL: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { countSheep } = require("./ifYouCantSleepJustCountSheep")

describe("Fixed tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(countSheep(0), "")
    assert.strictEqual(countSheep(1), "1 sheep...")
    assert.strictEqual(countSheep(2), "1 sheep...2 sheep...")
    assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...")
  })
})

describe("Random tests", () => {
  const solution = (n) => Array.from("_".repeat(n), (_, i) => `${i + 1} sheep...`).join("")

  it("Testing for 100 random tests", () => {
    for (let i = 0; i < 100; i++) {
      assert.strictEqual(countSheep(i), solution(i), `Testing for num = ${i}`)
    }
  })
})
