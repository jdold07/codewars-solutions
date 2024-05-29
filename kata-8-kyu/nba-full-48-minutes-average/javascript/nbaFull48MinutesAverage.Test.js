//+ ====================================================================================================================
//+
//+ 8 kyu - NBA full 48 minutes average  [ ID: 587c2d08bb65b5e8040004fd ] (nba-full-48-minutes-average)
//+ URL: https://www.codewars.com/kata/587c2d08bb65b5e8040004fd
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { pointsPer48 } = require("./nbaFull48MinutesAverage")

const ans = (ppg, mpg) => {
  if (mpg === 0 || ppg === 0) {
    return 0
  }
  const avg = parseFloat((ppg / mpg) * 48).toFixed(1)
  return +avg
}

// const ans2 = function (ppg, mpg) {
//   return ppg === 0 || mpg === 0 ? 0 : +parseFloat(((parseFloat(ppg) / mpg) * 480) / 10).toFixed(1)
// }

const randPpg = () => +parseFloat(Math.random() * 99 + 1).toFixed(1)
const randMpg = () => Math.floor(Math.random() * 47 + 1)

describe("Solution", () => {
  it("should return a number rounded to 1 decimal point", () => {
    assert.strictEqual(pointsPer48(12, 20), 28.8)
    assert.strictEqual(pointsPer48(10, 10), 48.0)
    assert.strictEqual(pointsPer48(5, 17), 14.1)
    assert.strictEqual(pointsPer48(30.8, 34.7), 42.6) // Russell Westbrook 1/15/17
    assert.strictEqual(pointsPer48(22.9, 33.8), 32.5) // Kemba Walker 1/15/17
  }),
    it("should return zero if zero", () => {
      assert.strictEqual(pointsPer48(0, 0), 0)
    })
  it("should pass randomly generated numbers", () => {
    for (let i = 0; i < 100; i += 1) {
      let ppg = randPpg()
      let mpg = randMpg()
      assert.approximately(pointsPer48(ppg, mpg), ans(ppg, mpg), 0.11, "Close Enough!")
    }
  })
})
