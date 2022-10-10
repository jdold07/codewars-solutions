//+ ====================================================================================================================
//+
//+ 8 kyu - Fix your code before the garden dies!   [ ID: 57158fb92ad763bb180004e7 ] (fix-your-code-before-the-garden-dies)
//+ URL: https://www.codewars.com/kata/57158fb92ad763bb180004e7
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | DEBUGGING
//+
//+ ====================================================================================================================

const { randomNumber } = require("../../../utils/cwUtils")
const { assert } = require("chai")
const { rainAmount } = require("./fixYourCodeBeforeTheGardenDies")

describe("rainAmount(mm)", () => {
  it("should work for fixed tests", () => {
    assert.strictEqual(rainAmount(100), "Your plant has had more than enough water for today!")
    assert.strictEqual(rainAmount(40), "Your plant has had more than enough water for today!")
    assert.strictEqual(rainAmount(39), "You need to give your plant 1mm of water")
    assert.strictEqual(rainAmount(5), "You need to give your plant 35mm of water")
    assert.strictEqual(rainAmount(0), "You need to give your plant 40mm of water")
  })
  it("should work for random tests as well", () => {
    function solution(mm) {
      if (mm <= 39) {
        return "You need to give your plant " + (40 - mm) + "mm of water"
      } else {
        return "Your plant has had more than enough water for today!"
      }
    }
    let mm, actual, expected
    for (let i = 0; i < 100; i++) {
      mm = randomNumber()
      expected = solution(mm)
      actual = rainAmount(mm)
      assert.strictEqual(actual, expected)
    }
  })
})
