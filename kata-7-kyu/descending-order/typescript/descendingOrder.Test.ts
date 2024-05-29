//+ ====================================================================================================================
//+
//+ 7 kyu - Descending Order  [ ID: 5467e4d82edf8bbf40000155 ] (descending-order)
//+ URL: https://www.codewars.com/kata/5467e4d82edf8bbf40000155
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { descendingOrder } from "./descendingOrder"

describe("descendingOrder", function () {
  it("should return some sample numbers in descending order", function () {
    assert.strictEqual(descendingOrder(0), 0)
    assert.strictEqual(descendingOrder(1), 1)
    assert.strictEqual(descendingOrder(123456789), 987654321)
  })

  it("should return some fixed numbers in descending order", function () {
    assert.strictEqual(descendingOrder(111), 111)
    assert.strictEqual(descendingOrder(15), 51)
    assert.strictEqual(descendingOrder(1021), 2110)
  })

  it("should return some random numbers in descending order", function () {
    for (let i = 0; i < 100; ++i) {
      const n = ~~(Math.random() * 1e9) + 1

      const actual = descendingOrder(n)
      const expected = parseInt(n.toString().split("").sort().reverse().join(""))

      assert.strictEqual(actual, expected)
    }
  })
})
