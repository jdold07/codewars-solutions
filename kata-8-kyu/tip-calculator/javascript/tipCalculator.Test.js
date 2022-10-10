//+ ====================================================================================================================
//+
//+ 8 kyu - Tip Calculator  [ ID: 56598d8076ee7a0759000087 ] (tip-calculator)
//+ URL: https://www.codewars.com/kata/56598d8076ee7a0759000087
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { calculateTip } = require("./tipCalculator")

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min
}

let bigRandomNum = getRandomNum(500, 2000)
let medRandomNum = getRandomNum(50, 100)
let smallRandomNum = getRandomNum(0, 15)

function answer(randomNum, percent) {
  return Math.ceil(randomNum * percent)
}

describe("calculateTip", function () {
  it("returns 'Rating not recognised' when invalid rating", function () {
    assert.strictEqual(calculateTip(20, "hi"), "Rating not recognised")
    assert.strictEqual(calculateTip(20, "dfsjkfh"), "Rating not recognised")
    assert.strictEqual(calculateTip(20, "great!"), "Rating not recognised")
  })

  it("returns correct tip amount for whole amounts", function () {
    assert.strictEqual(calculateTip(10, "Terrible"), 0)
    assert.strictEqual(calculateTip(30, "poor"), 2)
    assert.strictEqual(calculateTip(20, "Excellent"), 4)
  })

  it("returns correct tip amount for amounts with decimals", function () {
    assert.strictEqual(calculateTip(26.95, "gOod"), 3)
    assert.strictEqual(calculateTip(107.65, "GReat"), 17)
    assert.strictEqual(calculateTip(684.99, "Poor"), 35)
  })

  it("should work with random amounts", function () {
    assert.strictEqual(calculateTip(bigRandomNum, "GREAT"), answer(bigRandomNum, 0.15))
    assert.strictEqual(calculateTip(medRandomNum, "good"), answer(medRandomNum, 0.1))
    assert.strictEqual(calculateTip(smallRandomNum, "excellent"), answer(smallRandomNum, 0.2))
  })
})
