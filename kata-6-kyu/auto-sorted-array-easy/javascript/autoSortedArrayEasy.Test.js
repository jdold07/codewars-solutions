//+ ====================================================================================================================
//+
//+ 6 kyu - Auto Sorted Array - Easy  [ ID: 5a0ddb08c374cb18e900006b ] (auto-sorted-array-easy)
//+ URL: https://www.codewars.com/kata/5a0ddb08c374cb18e900006b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | SORTING | LANGUAGE FEATURES | OBJECT-ORIENTED PROGRAMMING
//+
//+ ====================================================================================================================

import { assert, expect } from "vitest"
const { SortedArray } = require("./autoSortedArrayEasy")

it("Example Tests", function () {
  const ascendingArray = new SortedArray("asc")
  assert.deepEqual(ascendingArray, [])
  ascendingArray.insert(3)
  assert.deepEqual(ascendingArray, [3])
  ascendingArray.insert(1, 2)
  assert.deepEqual(ascendingArray, [1, 2, 3])
  ascendingArray.insert(6, 0)
  assert.deepEqual(ascendingArray, [0, 1, 2, 3, 6])
  ascendingArray.pop()
  assert.deepEqual(ascendingArray, [0, 1, 2, 3])
  ascendingArray.shift()
  assert.deepEqual(ascendingArray, [1, 2, 3])
  ascendingArray.insert(-1, 10)
  assert.deepEqual(ascendingArray, [-1, 1, 2, 3, 10])

  const descendingArray = new SortedArray("desc")
  assert.deepEqual(descendingArray, [])
  descendingArray.insert(3)
  assert.deepEqual(descendingArray, [3])
  descendingArray.insert(1, 2)
  assert.deepEqual(descendingArray, [3, 2, 1])
  descendingArray.insert(6, 0)
  assert.deepEqual(descendingArray, [6, 3, 2, 1, 0])
  descendingArray.pop()
  assert.deepEqual(descendingArray, [6, 3, 2, 1])
  descendingArray.shift()
  assert.deepEqual(descendingArray, [3, 2, 1])
  descendingArray.insert(-1, 10)
  assert.deepEqual(descendingArray, [10, 3, 2, 1, -1])
})

describe("Basic Tests", () => {
  it("should be an array", () => {
    const ascendingArray = new SortedArray("asc")
    expect(Array.isArray(ascendingArray) === true, "Should be an array.")
  })

  it("should be init with some length", () => {
    const ascendingArray = new SortedArray("asc", 4)
    expect((ascendingArray.length = 4), "Should be length 4.")
  })

  it("should throw error for wrong enum", () => {
    try {
      assert.throws(() => new SortedArray("bad"))
      expect(true)
    } catch (e) {
      expect(false, "Didn't throw and error.")
    }
  })

  it("should have a insert method", () => {
    const ascendingArray = new SortedArray("asc")
    expect(typeof ascendingArray.insert === "function", "insert method should be a function.")
  })

  it("should have a pop method", () => {
    const ascendingArray = new SortedArray("asc")
    expect(typeof ascendingArray.pop === "function", "pop method should be a function.")
  })

  it("should have a shift method", () => {
    const ascendingArray = new SortedArray("asc")
    expect(typeof ascendingArray.shift === "function", "shift method should be a function.")
  })

  describe("#insert", () => {
    it("should add a single value to the array", () => {
      const ascendingArray = new SortedArray("asc")
      ascendingArray.insert(1)
      assert.deepEqual(ascendingArray, [1])
    })

    it("should add a multiple values to the array", () => {
      const ascendingArray = new SortedArray("asc")
      ascendingArray.insert(2, 1, 6)
      assert.deepEqual(ascendingArray, [1, 2, 6])
    })

    it("should return new array length", () => {
      const ascendingArray = new SortedArray("asc")
      const length = ascendingArray.insert(2, 1, 6)
      expect(length === 3, "Should be length 3.")
    })
  })

  describe("#pop", () => {
    it("should remove a single value from the end of array", () => {
      const ascendingArray = new SortedArray("asc")
      ascendingArray.insert(2, 1, 6)
      ascendingArray.pop()
      assert.deepEqual(ascendingArray, [1, 2])
    })

    it("should return the removed value", () => {
      const ascendingArray = new SortedArray("asc")
      ascendingArray.insert(2, 1, 6)
      const val = ascendingArray.pop()
      expect(val === 6, "Value should be 6.")
    })
  })

  describe("#shift", () => {
    it("should remove a single value from the start of array", () => {
      const ascendingArray = new SortedArray("asc")
      ascendingArray.insert(2, 1, 6)
      ascendingArray.shift()
      assert.deepEqual(ascendingArray, [2, 6])
    })

    it("should return the removed value", () => {
      const ascendingArray = new SortedArray("asc")
      ascendingArray.insert(2, 1, 6)
      const val = ascendingArray.shift()
      expect(val === 1, "Value should be 1.")
    })
  })

  describe("#sort", () => {
    it("should sort ascending", () => {
      const ascendingArray = new SortedArray("asc")
      ascendingArray.insert(2)
      ascendingArray.insert(6)
      ascendingArray.insert(-3)
      ascendingArray.insert(61)
      ascendingArray.insert(-21)
      ascendingArray.insert(0)
      assert.deepEqual(ascendingArray, [-21, -3, 0, 2, 6, 61])
    })

    it("should sort descending", () => {
      const ascendingArray = new SortedArray("desc")
      ascendingArray.insert(2)
      ascendingArray.insert(6)
      ascendingArray.insert(-3)
      ascendingArray.insert(61)
      ascendingArray.insert(-21)
      ascendingArray.insert(0)
      assert.deepEqual(ascendingArray, [61, 6, 2, 0, -3, -21])
    })
  })
})
