//+ ====================================================================================================================
//+
//+ 8 kyu - Enumerable Magic #1 - True for All?  [ ID: 54598d1fcbae2ae05200112c ] (enumerable-magic-number-1-true-for-all)
//+ URL: https://www.codewars.com/kata/54598d1fcbae2ae05200112c
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { all } = require("./enumerableMagicNumber1TrueForAll")

it("all", function () {
  const list = [2, 4, 6, 10],
    isEven = function (v) {
      return !(v % 2)
    }
  assert.strictEqual(all(list, isEven), true, "All items are even")
  assert.strictEqual(
    all(list, function (v) {
      return v < 10
    }),
    false,
    "Not all items are less than ten"
  )
  assert.strictEqual(
    all(list, function (v) {
      return v % 2
    }),
    false,
    "No items are odd"
  )
  assert.strictEqual(all([], isEven), true, "An empty list should return true")
})
