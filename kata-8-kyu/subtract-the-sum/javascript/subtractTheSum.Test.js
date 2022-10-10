//+ ====================================================================================================================
//+
//+ 8 kyu - Subtract the Sum  [ ID: 56c5847f27be2c3db20009c3 ] (subtract-the-sum)
//+ URL: https://www.codewars.com/kata/56c5847f27be2c3db20009c3
//+ Category: GAMES  |  Tags: PUZZLES
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { SubtractSum } = require("./subtractTheSum")

describe("Test", function () {
  it("Basic Test", function () {
    assert.strictEqual(SubtractSum(10), "apple")
  })

  it("Random Tests", function () {
    for (let i = 0; i < 100; i++) {
      let m = Math.floor(Math.random() * 9990) + 10
      assert.strictEqual(SubtractSum(m), "apple")
    }
  })
})
