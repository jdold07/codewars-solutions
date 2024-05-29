//+ ====================================================================================================================
//+
//+ 6 kyu - Array Deep Count  [ ID: 596f72bbe7cd7296d1000029 ] (array-deep-count)
//+ URL: https://www.codewars.com/kata/596f72bbe7cd7296d1000029
//+ Category: REFERENCE  |  Tags: ARRAYS | RECURSION | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { inspect } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { deepCount } = require("./arrayDeepCount")

describe("Basic tests", () => {
  it("Basic Tests", () => {
    assert.strictEqual(deepCount([]), 0, "Expected 0")
    assert.strictEqual(deepCount([1, 2, 3]), 3, "Expected 3")
    assert.strictEqual(deepCount(["x", "y", ["z"]]), 4, "Expected 4")
    assert.strictEqual(deepCount([1, 2, [3, 4, [5]]]), 7, "Expected 7")
    assert.strictEqual(deepCount([[[[[[[[[]]]]]]]]]), 8, "Expected 8")
  })
})

describe("Random tests", () => {
  it("Random Tests", () => {
    function deepCountCheck(a) {
      let count = a.length
      for (let i of a) {
        if (Array.isArray(i)) count += deepCountCheck(i)
      }
      return count
    }
    function multiArrayGenerator(count, maxDepth) {
      let result = []
      if (count < maxDepth) {
        for (let i = 0; i < 3; i++) {
          let prob1 = Math.random(),
            prob2 = Math.random()
          if (prob1 > prob2) {
            result.push([])
          } else {
            result.push(Math.floor(Math.random() * 30))
          }
        }
        for (let k in result) {
          if (Array.isArray(result[k]) && result[k].length === 0) {
            result[k].push(multiArrayGenerator(count + 1, maxDepth))
          }
        }
      }
      return result
    }

    function randomTests() {
      for (let i = 0; i < 10; i++) {
        let count = 0,
          maxDepth = Math.floor(Math.random() * 4)
        let ranArray = multiArrayGenerator(count, maxDepth)
        console.log("The input was ", inspect(ranArray))
        let expected = deepCountCheck(ranArray)
        let actual = deepCount(ranArray)
        assert.strictEqual(actual, expected)
      }
    }
    randomTests()
  })
})
