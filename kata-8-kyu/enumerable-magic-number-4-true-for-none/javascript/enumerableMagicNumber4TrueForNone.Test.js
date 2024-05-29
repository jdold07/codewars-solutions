//+ ====================================================================================================================
//+
//+ 8 kyu - Enumerable Magic #4 - True for None?  [ ID: 545993ee52756d98ca0010e1 ] (enumerable-magic-number-4-true-for-none)
//+ URL: https://www.codewars.com/kata/545993ee52756d98ca0010e1
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { none } = require("./enumerableMagicNumber4TrueForNone")

describe("none ?", function () {
  it("Tests for none function", function () {
    let list = [0, 1, 2, 3, 5, 8, 13]
    assert.strictEqual(
      none(list, function (item) {
        return item > 100
      }),
      true,
      "no items are over 100"
    )
    assert.strictEqual(
      none(list, function (item) {
        return item > 9
      }),
      false,
      "last item is over 9"
    )
    assert.strictEqual(
      none(list, function (item) {
        return item % 2 > 0
      }),
      false,
      "some items are even"
    )
    assert.strictEqual(
      none(list, function (item) {
        return item % 2
      }),
      false,
      "all items are odd"
    )

    assert.strictEqual(
      none([], function (item) {
        return item % 2 > 0
      }),
      true,
      "empty list should return true"
    )
  })
})
