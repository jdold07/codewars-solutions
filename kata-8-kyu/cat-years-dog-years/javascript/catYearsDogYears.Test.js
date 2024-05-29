//+ ====================================================================================================================
//+
//+ 8 kyu - Cat years, Dog years  [ ID: 5a6663e9fd56cb5ab800008b ] (cat-years-dog-years)
//+ URL: https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { humanYearsCatYearsDogYears } = require("./catYearsDogYears")

describe("Solution Tests", function () {
  it("one", function () {
    assert.deepEqual(humanYearsCatYearsDogYears(1), [1, 15, 15])
  })

  it("two", function () {
    assert.deepEqual(humanYearsCatYearsDogYears(2), [2, 24, 24])
  })

  it("ten", function () {
    assert.deepEqual(humanYearsCatYearsDogYears(10), [10, 56, 64])
  })

  it("random", function () {
    const answer20180123 = (h) => [
      h,
      h == 1 ? 15 : h == 2 ? 24 : 24 + 4 * (h - 2),
      h == 1 ? 15 : h == 2 ? 24 : 24 + 5 * (h - 2)
    ]

    for (let r = 0; r < 100; r++) {
      let humanYears = Math.floor(Math.random() * 25) + 1
      let expected = answer20180123(humanYears)
      let actual = humanYearsCatYearsDogYears(humanYears)
      console.log(`Random test ${r + 1}: human years ${humanYears} => [${expected}]`)
      assert.deepEqual(actual, expected)
    }
  })
})
