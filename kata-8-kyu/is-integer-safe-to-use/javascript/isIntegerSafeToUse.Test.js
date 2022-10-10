//+ ====================================================================================================================
//+
//+ 8 kyu - Is integer safe to use?  [ ID: 55a4f9afeffe4231090000d6 ] (is-integer-safe-to-use)
//+ URL: https://www.codewars.com/kata/55a4f9afeffe4231090000d6
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { SafeInteger } = require("./isIntegerSafeToUse")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(SafeInteger(Math.pow(2, 54) - 1), false, "Value returned should be false")
    assert.strictEqual(SafeInteger(Math.pow(2, 52) - 1), true, "Value returned should be true")
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
    function isSafe(n) {
      return Number.isSafeInteger(n)
    }
    for (let i = 0; i < 200; i++) {
      let randInt = getRandomInt(Math.pow(2, 54) - 1, Math.pow(2, 32))
      assert.strictEqual(SafeInteger(randInt), isSafe(randInt), "Value returned should be " + isSafe(randInt))
    }
  })
})
