//+ ====================================================================================================================
//+
//+ 8 kyu - Keep up the hoop  [ ID: 55cb632c1a5d7b3ad0000145 ] (keep-up-the-hoop)
//+ URL: https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { hoopCount } = require("./keepUpTheHoop")

describe("Your Solution", function () {
  it("should work for some example tests", function () {
    // The existing test cases - they really should belong to the "Example Tests" provided to the user
    // and not the actual test cases required for completing this Kata
    assert.strictEqual(hoopCount(6), "Keep at it until you get it")
    assert.strictEqual(hoopCount(10), "Great, now move on to tricks")
    assert.strictEqual(hoopCount(22), "Great, now move on to tricks")
  })
  it("should work for some fixed tests", function () {
    assert.strictEqual(hoopCount(1), "Keep at it until you get it")
    assert.strictEqual(hoopCount(2), "Keep at it until you get it")
    assert.strictEqual(hoopCount(3), "Keep at it until you get it")
    assert.strictEqual(hoopCount(4), "Keep at it until you get it")
    assert.strictEqual(hoopCount(5), "Keep at it until you get it")
    assert.strictEqual(hoopCount(7), "Keep at it until you get it")
    assert.strictEqual(hoopCount(8), "Keep at it until you get it")
    assert.strictEqual(hoopCount(9), "Keep at it until you get it")
    assert.strictEqual(hoopCount(11), "Great, now move on to tricks")
    assert.strictEqual(hoopCount(12), "Great, now move on to tricks")
    assert.strictEqual(hoopCount(13), "Great, now move on to tricks")
    assert.strictEqual(hoopCount(14), "Great, now move on to tricks")
    assert.strictEqual(hoopCount(15), "Great, now move on to tricks")
    assert.strictEqual(hoopCount(16), "Great, now move on to tricks")
    assert.strictEqual(hoopCount(17), "Great, now move on to tricks")
    assert.strictEqual(hoopCount(18), "Great, now move on to tricks")
    assert.strictEqual(hoopCount(19), "Great, now move on to tricks")
    assert.strictEqual(hoopCount(20), "Great, now move on to tricks")
    assert.strictEqual(hoopCount(100), "Great, now move on to tricks")
    assert.strictEqual(hoopCount(1e3), "Great, now move on to tricks")
    assert.strictEqual(hoopCount(1e4), "Great, now move on to tricks")
  })
  it("should also work for randomly generated test cases at runtime", function () {
    function solution(n) {
      return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
    }
    for (let i = 0; i < 100; i++) {
      let randomHoops = 1 + ~~(Math.random() * 100)
      let expected = solution(randomHoops)
      let actual = hoopCount(randomHoops)
      assert.strictEqual(actual, expected)
    }
  })
})
