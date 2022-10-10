//+ ====================================================================================================================
//+
//+ 7 kyu - Find the nth Digit of a Number  [ ID: 577b9960df78c19bca00007e ] (find-the-nth-digit-of-a-number)
//+ URL: https://www.codewars.com/kata/577b9960df78c19bca00007e
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { findDigit } = require("./findTheNthDigitOfANumber")

let sol = function (num, nth) {
  num = num < 0 ? -num : num
  if (nth <= 0) return -1

  return ((num % Math.pow(10, nth)) - (num % Math.pow(10, nth - 1))) / Math.pow(10, nth - 1)
}

describe("Find Digit", function () {
  it("Normal Values", function () {
    assert.equal(findDigit(5673, 4), 5)
    assert.equal(findDigit(129, 2), 2)
    assert.equal(findDigit(-2825, 3), 8)
    assert.equal(findDigit(0, 20), 0)
    assert.equal(findDigit(65, 0), -1)
    assert.equal(findDigit(24, -8), -1)
  })
  it("Num is Negative", function () {
    assert.equal(findDigit(-456, 4), 0)
    assert.equal(findDigit(-1234, 2), 3)
    assert.equal(findDigit(-5540, 1), 0)
  })
  it("Nth is not Positive", function () {
    assert.equal(findDigit(678998, 0), -1)
    assert.equal(findDigit(-67854, -57), -1)
    assert.equal(findDigit(0, -3), -1)
  })
  it("Random Tests", function () {
    for (let i = 0; i < 10; i++) {
      let rand_num = ~~(10000000 * Math.random())
      let rand_nth = ~~(8 * Math.random() - 2)

      assert.equal(findDigit(rand_num, rand_nth), sol(rand_num, rand_nth))
    }
  })
})
