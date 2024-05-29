//+ ====================================================================================================================
//+
//+ 8 kyu - Enumerable Magic #2 - True for Any?  [ ID: 54598e89cbae2ac001001135 ] (enumerable-magic-number-2-true-for-any)
//+ URL: https://www.codewars.com/kata/54598e89cbae2ac001001135
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { any } = require("./enumerableMagicNumber2TrueForAny")

describe("Tests", () => {
  it("test", () => {
    const list = [0, 1, 2, 3, 5, 8, 13]

    assert.strictEqual(
      any(list, function (v) {
        return !(v % 2)
      }),
      true,
      "at least 1 item is even"
    )
    assert.strictEqual(
      any(list, function (v) {
        return v > 20
      }),
      false,
      "no items are greater than 20"
    )
    assert.strictEqual(
      any(list, function (v) {
        return v > 0
      }),
      true,
      "at least 1 item is a positive integer"
    )
    assert.strictEqual(
      any([], function (v) {
        return v > 0
      }),
      false,
      "an empty list should return false"
    )

    assert.strictEqual(
      any([1, 2, 3, 4], function (v) {
        return v == 4
      }),
      true,
      "at least 1 item equals 4"
    )
    assert.strictEqual(
      any([1, 2, 3, 3], function (v) {
        return v == 4
      }),
      false,
      "no item equals 4"
    )
  })
})
