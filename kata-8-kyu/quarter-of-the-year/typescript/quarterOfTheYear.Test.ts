//+ ====================================================================================================================
//+
//+ 8 kyu - Quarter of the year  [ ID: 5ce9c1000bab0b001134f5af ] (quarter-of-the-year)
//+ URL: https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { quarterOf } from "./quarterOfTheYear"

describe("Basic tests", () => {
  it("Should pass basic tests", () => {
    assert.equal(quarterOf(3), 1)
    assert.equal(quarterOf(8), 3)
    assert.equal(quarterOf(11), 4)
  })
})

describe("Random tests", () => {
  const check = (m: number): number => Math.ceil(m / 3)

  for (let i = 1; i <= 100; i++) {
    const m: number = ~~(Math.random() * 12 + 1)
    const expected: number = check(m)
    it(`Testing №${i} should work for ${m}`, () => {
      assert.equal(quarterOf(m), expected)
    })
  }
})
