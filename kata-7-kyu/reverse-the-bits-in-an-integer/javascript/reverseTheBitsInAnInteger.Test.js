//+ ====================================================================================================================
//+
//+ 7 kyu - Reverse the bits in an integer  [ ID: 5959ec605595565f5c00002b ] (reverse-the-bits-in-an-integer)
//+ URL: https://www.codewars.com/kata/5959ec605595565f5c00002b
//+ Category: REFERENCE  |  Tags: BITS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { reverseBits } = require("./reverseTheBitsInAnInteger")

describe("Sample tests", function () {
  it("should work for some integers", function () {
    assert.strictEqual(reverseBits(417), 267)
    assert.strictEqual(reverseBits(267), 417)
    assert.strictEqual(reverseBits(0), 0)
    assert.strictEqual(reverseBits(2017), 1087)
    assert.strictEqual(reverseBits(1023), 1023)
    assert.strictEqual(reverseBits(1024), 1)
    assert.strictEqual(reverseBits(Number.MAX_SAFE_INTEGER), Number.MAX_SAFE_INTEGER)
  })
})

describe("Random tests", function () {
  it("should work for random integers", function () {
    const numberOfTests = 200

    const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
    const solution = (n) => parseInt(n.toString(2).split("").reverse().join(""), 2)

    for (let i = 0; i < numberOfTests; i++) {
      const randomInteger = getRandomInteger(0, Number.MAX_SAFE_INTEGER)
      assert.strictEqual(reverseBits(randomInteger), solution(randomInteger))
    }
  })
})
