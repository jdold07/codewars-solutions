//+ ====================================================================================================================
//+
//+ 7 kyu - lucky number  [ ID: 55afed09237df73343000042 ] (lucky-number)
//+ URL: https://www.codewars.com/kata/55afed09237df73343000042
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { isLucky } = require("./luckyNumber")

describe("Testing if number is lucky", function () {
  it("Basic testing", function () {
    assert.strictEqual(isLucky(1892376), true, "Wrong result for 1892376")
    assert.strictEqual(isLucky(189237), false, "Wrong result for 189237")
    assert.strictEqual(isLucky(1098), true, "Wrong result for 1098")
    assert.strictEqual(isLucky(22869), true, "Wrong result for 22869")
    assert.strictEqual(isLucky(0), true, "Wrong result for 0")
  })
  it("Random testing", function () {
    for (let i = 0; i < 100; i++) {
      let n = Math.floor(Math.random() * 1000000)
      assert.strictEqual(isLucky(n), n % 9 === 0, `Wrong result for ${n}`)
    }
  })
})
