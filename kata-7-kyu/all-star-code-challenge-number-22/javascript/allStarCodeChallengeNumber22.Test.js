//+ ====================================================================================================================
//+
//+ 7 kyu - All Star Code Challenge #22  [ ID: 5865cff66b5699883f0001aa ] (all-star-code-challenge-number-22)
//+ URL: https://www.codewars.com/kata/5865cff66b5699883f0001aa
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { toTime } = require("./allStarCodeChallengeNumber22")

let random = function (num) {
  //returns a random integer from 0 - num
  return Math.floor(Math.random() * num)
}

let mySol = function (sec) {
  let HH = Math.floor(sec / 3600)
  let MM = Math.floor(sec / 60 - HH * 60)
  return HH + " hour(s) and " + MM + " minute(s)"
}

describe("testing toTime()", function () {
  it("should properly work with example test cases", function () {
    assert.strictEqual(toTime(3600), "1 hour(s) and 0 minute(s)")
    assert.strictEqual(toTime(3601), "1 hour(s) and 0 minute(s)")
    assert.strictEqual(toTime(3500), "0 hour(s) and 58 minute(s)")
    assert.strictEqual(toTime(323500), "89 hour(s) and 51 minute(s)")
    assert.strictEqual(toTime(0), "0 hour(s) and 0 minute(s)")
  })

  it("should function properly with random input", function () {
    let counter = 10
    let input
    while (counter > 0) {
      input = random(999999)
      assert.strictEqual(toTime(input), mySol(input))
      counter--
    }
  })
})
