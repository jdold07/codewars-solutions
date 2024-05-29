//+ ====================================================================================================================
//+
//+ 8 kyu - Sum Arrays  [ ID: 53dc54212259ed3d4f00071c ] (sum-arrays)
//+ URL: https://www.codewars.com/kata/53dc54212259ed3d4f00071c
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomNumber } = require("../../../utils/cwUtils")
import { assert, expect } from "vitest"
const { sum } = require("./sumArrays")

describe("sum", function () {
  it("The method sum should be defined.", function () {
    expect(sum, "The method sum is not defined.")
  })

  it("Empty array should yield 0.", function () {
    assert.strictEqual(sum([]), 0)
  })

  it("One number in array should be that number.", function () {
    for (let i = 0; i < 5; i++) {
      const r = randomNumber()
      assert.strictEqual(sum([r]), r)
    }
    assert.strictEqual(sum([5]), 5)
    assert.strictEqual(sum([1251]), 1251)
  })

  it("One negative number in array should be that number.", function () {
    for (let i = 0; i < 5; i++) {
      const r = -1 * randomNumber()
      assert.strictEqual(sum([r]), r)
    }
    assert.strictEqual(sum([-1]), -1)
    assert.strictEqual(sum([-521]), -521)
  })

  it("Multiple numbers should sum to correct total.", function () {
    let total = 0
    const array = []
    for (let i = 0; i < 10; i++) {
      let t = randomNumber()
      array.push(t)
      total += t
    }
    assert.strictEqual(sum(array), total)
    assert.strictEqual(sum([1, 5.2, 4, 0]), 10.2)
  })

  it("Multiple numbers with negatives should sum to correct total.", function () {
    let total = 0
    const array = []
    for (let i = 0; i < 10; i++) {
      // Positive numbers
      let t = randomNumber()
      array.push(t)
      total += t
    }
    for (let i = 0; i < 10; i++) {
      // Negative numbers
      let t = -1 * randomNumber()
      array.push(t)
      total += t
    }
    assert.strictEqual(sum(array), total)
    assert.strictEqual(sum([1, 5.2, 4, 0, -1]), 9.2)
  })
})
