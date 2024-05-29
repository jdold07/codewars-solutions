//+ ====================================================================================================================
//+
//+ 6 kyu - Unique In Order  [ ID: 54e6533c92449cc251001667 ] (unique-in-order)
//+ URL: https://www.codewars.com/kata/54e6533c92449cc251001667
//+ Category: REFERENCE  |  Tags: ALGORITHMS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { uniqueInOrder } = require("./uniqueInOrder")

describe("lets test it", function () {
  it("should work with empty array", function () {
    assert.deepEqual(uniqueInOrder(""), [])
  })
  it("should work with one element", function () {
    assert.deepEqual(uniqueInOrder("A"), ["A"])
  })
  it("should reduce duplicates", function () {
    assert.deepEqual(uniqueInOrder("AA"), ["A"])
    assert.deepEqual(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"])
    assert.deepEqual(uniqueInOrder("AADD"), ["A", "D"])
    assert.deepEqual(uniqueInOrder("AAD"), ["A", "D"])
    assert.deepEqual(uniqueInOrder("ADD"), ["A", "D"])
  })
  it("and treat lowercase as different from uppercase", function () {
    assert.deepEqual(uniqueInOrder("ABBCcAD"), ["A", "B", "C", "c", "A", "D"])
  })
  it("and work with int arrays", function () {
    assert.deepEqual(uniqueInOrder([1, 2, 3, 3]), [1, 2, 3])
  })
  it("and work with char arrays", function () {
    assert.deepEqual(uniqueInOrder(["a", "b", "b"]), ["a", "b"])
  })
})
