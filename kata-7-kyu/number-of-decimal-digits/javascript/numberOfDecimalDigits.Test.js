//+ ====================================================================================================================
//+
//+ 7 kyu - Number of Decimal Digits  [ ID: 58fa273ca6d84c158e000052 ] (number-of-decimal-digits)
//+ URL: https://www.codewars.com/kata/58fa273ca6d84c158e000052
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { digits } = require("./numberOfDecimalDigits")

describe("Solution", function () {
  it("Random tests", function () {
    for (let i = 0; i < 20; ++i) {
      const tc = Number(
        Math.floor(1 + Math.random() * 9) +
          "" +
          Array.apply(null, Array(1 + Math.floor(Math.random() * 10)))
            .map(() => Math.floor(Math.random() * 10))
            .join("")
      )

      assert.strictEqual(digits(tc), String(tc).length)
    }
  })

  it("Boundary tests", function () {
    assert.strictEqual(digits(0), 1)
    assert.strictEqual(digits(1), 1)
    assert.strictEqual(digits(5), 1)
    assert.strictEqual(digits(9), 1)
    assert.strictEqual(digits(10), 2)
    assert.strictEqual(digits(11), 2)
    assert.strictEqual(digits(99), 2)
    assert.strictEqual(digits(100), 3)
    assert.strictEqual(digits(101), 3)
    assert.strictEqual(digits(12345), 5)
    assert.strictEqual(digits(9876543210), 10)
    assert.strictEqual(digits(Number.MAX_SAFE_INTEGER), 16)
  })
})
