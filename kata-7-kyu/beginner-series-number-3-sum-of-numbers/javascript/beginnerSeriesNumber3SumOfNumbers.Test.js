//+ ====================================================================================================================
//+
//+ 7 kyu - Beginner Series #3 Sum of Numbers  [ ID: 55f2b110f61eb01779000053 ] (beginner-series-number-3-sum-of-numbers)
//+ URL: https://www.codewars.com/kata/55f2b110f61eb01779000053
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { getSum } = require("./beginnerSeriesNumber3SumOfNumbers")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(getSum(5, -1), 14)
    assert.strictEqual(getSum(505, 4), 127759)
    assert.strictEqual(getSum(321, 123), 44178)
    assert.strictEqual(getSum(-50, 0), -1275)
    assert.strictEqual(getSum(-1, -5), -15)
    assert.strictEqual(getSum(-5, -5), -5)
    assert.strictEqual(getSum(-505, 4), -127755)
    assert.strictEqual(getSum(-321, 123), -44055)
    assert.strictEqual(getSum(0, 0), 0)
    assert.strictEqual(getSum(-5, -1), -15)
    assert.strictEqual(getSum(5, 1), 15)
    assert.strictEqual(getSum(-17, -17), -17)
    assert.strictEqual(getSum(17, 17), 17)
  })
})

describe("Random Tests:", function () {
  function Get_Sum(a, b) {
    let sum = 0
    if (a > b) {
      //Swapping Values to make a<b
      a = a + b
      b = a - b
      a = a - b
    }
    if (a == b) return a
    for (let i = a; i <= b; i++) sum += i
    return sum
  }

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  it("Testing for 100 random tests", () => {
    for (let i = 1; i < 100; i++) {
      let a = randInt(-600, 600)
      let b = randInt(-600, 600)
      assert.strictEqual(getSum(a, b), Get_Sum(a, b), "Testing for a=" + a + " & b=" + b)
    }
  })
})
