//+ ====================================================================================================================
//+
//+ 8 kyu - Get number from string  [ ID: 57a37f3cbb99449513000cd8 ] (get-number-from-string)
//+ URL: https://www.codewars.com/kata/57a37f3cbb99449513000cd8
//+ Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomNumber, randomToken } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { getNumberFromString } = require("./getNumberFromString")

function solution(s) {
  return parseInt(
    Array.from(s)
      .filter((x) => /\d/.test(x))
      .join("")
  )
}

describe("Basic tests", function () {
  it("should work as expected", function () {
    assert.deepEqual(getNumberFromString("1"), 1)
    assert.deepEqual(getNumberFromString("123"), 123)
    assert.deepEqual(getNumberFromString("this is number: 7"), 7)
    assert.deepEqual(getNumberFromString("$100 000 000"), 100000000)
    assert.deepEqual(getNumberFromString("hell5o wor6ld"), 56)
    assert.deepEqual(getNumberFromString("one1 two2 three3 four4 five5"), 12345)
  })
})

describe("Random tests", function () {
  it("should work as expected", function () {
    for (let i = 0; i < 10; i++) {
      let s = randomToken() + randomNumber() + randomToken()
      assert.deepEqual(getNumberFromString(s), solution(s))
    }
  })
})
