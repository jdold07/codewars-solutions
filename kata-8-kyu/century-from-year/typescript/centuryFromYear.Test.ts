//+ ====================================================================================================================
//+
//+ 8 kyu - Century From Year  [ ID: 5a3fe3dde1ce0e8ed6000097 ] (century-from-year)
//+ URL: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS | DATE TIME
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { centuryFromYear } from "./centuryFromYear"

const modelSolution = (year: number): number => Math.trunc((year + 99) / 100)

const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min

describe("centuryFromYear", () => {
  it("should return 18 when input is 1705", () => {
    const expected = 18
    const actual = centuryFromYear(1705)

    assert.strictEqual(actual, expected)
  })

  it("should return 19 when input is 1900", () => {
    const expected = 19
    const actual = centuryFromYear(1900)

    assert.strictEqual(actual, expected)
  })

  it("should return 17 when input is 1601", () => {
    const expected = 17
    const actual = centuryFromYear(1601)

    assert.strictEqual(actual, expected)
  })

  it("should return 20 when input is 2000", () => {
    const expected = 20
    const actual = centuryFromYear(2000)

    assert.strictEqual(actual, expected)
  })

  it("should passes some random tests", () => {
    for (let i = 0; i < 100; ++i) {
      const year = randomInt(1, 1000000)
      const expected = modelSolution(year)
      const actual = centuryFromYear(year)

      assert.strictEqual(actual, expected)
    }
  })
})
