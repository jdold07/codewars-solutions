//+ ====================================================================================================================
//+
//+ 8 kyu - Count Odd Numbers below n  [ ID: 59342039eb450e39970000a6 ] (count-odd-numbers-below-n)
//+ URL: https://www.codewars.com/kata/59342039eb450e39970000a6
//+ Category: GAMES  |  Tags: PERFORMANCE | ALGORITHMS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { oddCount } = require("./countOddNumbersBelowN")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(oddCount(15), 7, "Oops! Wrong.")
    assert.strictEqual(oddCount(15023), 7511, "Oops! Wrong.")
  })
})

describe("Test Cases", function () {
  it("Testing for 200 random tests", () => {
    for (let i = 1; i <= 200; i += 1) {
      let n = Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER)

      let usoln = oddCount(n)
      let soln = Math.floor(n / 2)
      assert.strictEqual(usoln, soln, `Testing for n = ${n}`)
    }
  })
})
