//+ ====================================================================================================================
//+
//+ 8 kyu - Be Concise III - Sum Squares  [ ID: 56f8fe6a2e6c0dc83b0008a7 ] (be-concise-iii-sum-squares)
//+ URL: https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomNumber } = require("../../../utils/cwUtils")
import { assert, expect } from "vitest"
const { sumSquares } = require("./beConciseIiiSumSquares")

describe("Your refactored solution", () => {
  const AUTHOR_BEST = 101
  it("should behave in exactly the same way as the program prior to refactoring for the range of inputs tested", () => {
    assert.strictEqual(sumSquares([1, 2, 3, 4, 5]), 55)
    assert.strictEqual(sumSquares([7, 3, 9, 6, 5]), 200)
    assert.strictEqual(sumSquares([11, 13, 15, 18, 2]), 843)
    assert.strictEqual(sumSquares([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]), 110)
  })
  it("should make use of at least one (of two) built-in Array methods I am looking for", () => {
    expect(
      (/\.map\(/.test(sumSquares.toString()) && /\.reduce\(/.test(sumSquares.toString())) ||
        /\.reduce\(/.test(sumSquares.toString()),
      "Expected keywords not found.  Keep researching :)",
    )
  })
  it(`could contain ${AUTHOR_BEST} characters or less`, () => {
    console.log(`Author's Best: ${AUTHOR_BEST}`)
    console.log(`Your character count: ${sumSquares.toString().length}`)
    if (sumSquares.toString().length <= AUTHOR_BEST) {
      expect(sumSquares.toString().length <= AUTHOR_BEST)
      console.log("Fantastic!  That's another test passed for you :D")
    } else {
      console.log("It's okay, I'll let you pass as long as your solution contains the keywords I am looking for.")
    }
  })
  it("should finally work for random tests", () => {
    function standard(array) {
      var result = 0
      for (let i = 0; i < array.length; i++) {
        result += array[i] ** 2
      }
      return result
    }
    var randArr
    for (let i = 0; i < 666; i++) {
      randArr = new Array(randomNumber() + 1)
      for (let k = 0; k < randArr.length; k++) {
        randArr[k] = randomNumber()
      }
      assert.strictEqual(sumSquares(randArr), standard(randArr))
    }
  })
})
