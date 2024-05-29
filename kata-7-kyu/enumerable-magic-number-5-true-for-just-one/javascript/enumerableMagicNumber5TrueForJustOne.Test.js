//+ ====================================================================================================================
//+
//+ 7 kyu - Enumerable Magic #5- True for Just One?  [ ID: 54599705cbae2aa60b0011a4 ] (enumerable-magic-number-5-true-for-just-one)
//+ URL: https://www.codewars.com/kata/54599705cbae2aa60b0011a4
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomize } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { one } = require("./enumerableMagicNumber5TrueForJustOne")

describe("one ?", function () {
  let list = randomize([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 7).sort()
  let dup = list[1 + ~~(Math.random() * (list.length - 2))],
    min = list[0],
    max = list[list.length - 1]
  list.push(dup)

  it(`${randomize(list)}`, () => {
    assert.strictEqual(
      one(list, function (item) {
        return item == min
      }),
      true,
      "exactly one item equals " + min
    )
    assert.strictEqual(
      one(list, function (item) {
        return item == max
      }),
      true,
      "exactly one item equals " + max
    )
    assert.strictEqual(
      one(list, function (item) {
        return item % 2
      }),
      false,
      "too many items are odd"
    )
    assert.strictEqual(
      one(list, function (item) {
        return item == dup
      }),
      false,
      "2 items equals " + dup
    )
    assert.strictEqual(
      one(list, function (item) {
        return item < min
      }),
      false,
      "no items are lesser than " + min
    )
    assert.strictEqual(
      one(list, function (item) {
        return item > max
      }),
      false,
      "no items are greater than " + max
    )

    assert.strictEqual(
      one([], function (item) {
        return item > 0
      }),
      false,
      "empty list should return false"
    )
  })
})
