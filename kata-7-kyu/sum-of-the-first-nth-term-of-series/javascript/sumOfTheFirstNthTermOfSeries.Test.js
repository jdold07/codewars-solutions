//+ ====================================================================================================================
//+
//+ 7 kyu - Sum of the first nth term of Series  [ ID: 555eded1ad94b00403000071 ] (sum-of-the-first-nth-term-of-series)
//+ URL: https://www.codewars.com/kata/555eded1ad94b00403000071
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { SeriesSum } = require("./sumOfTheFirstNthTermOfSeries")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(SeriesSum(1), "1.00")
    assert.strictEqual(SeriesSum(2), "1.25")
    assert.strictEqual(SeriesSum(3), "1.39")
    assert.strictEqual(SeriesSum(4), "1.49")
    assert.strictEqual(SeriesSum(5), "1.57")
    assert.strictEqual(SeriesSum(6), "1.63")
    assert.strictEqual(SeriesSum(7), "1.68")
    assert.strictEqual(SeriesSum(8), "1.73")
    assert.strictEqual(SeriesSum(9), "1.77")
    assert.strictEqual(SeriesSum(15), "1.94")
    assert.strictEqual(SeriesSum(39), "2.26")
    assert.strictEqual(SeriesSum(58), "2.40")
    assert.strictEqual(SeriesSum(0), "0.00")

    function randInt(min, max) {
      return Math.floor(min + Math.random() * max)
    }

    function SSSolution(n) {
      let dn = 1 + (n - 1) * 3
      let sum = 0
      let term
      for (let i = 1; i <= dn; i += 3) {
        term = 1 / i
        sum += term
      }
      return sum.toFixed(2)
    }

    for (let i = 0; i < 37; i++) {
      let n = randInt(0, 250)
      assert.strictEqual(SeriesSum(n), SSSolution(n))
    }
  })
})
