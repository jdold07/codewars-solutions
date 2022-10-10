//+ ====================================================================================================================
//+
//+ 7 kyu - Binary Addition  [ ID: 551f37452ff852b7bd000139 ] (binary-addition)
//+ URL: https://www.codewars.com/kata/551f37452ff852b7bd000139
//+ Category: REFERENCE  |  Tags: BINARY | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert, expect } = require("chai")
const { addBinary } = require("./binaryAddition")

describe("addBinary(1,2)", function () {
  let results1 = addBinary(1, 2)
  it("Should return something that isn't falsy", function () {
    expect(results1, "Something is wrong, no results!")
  })
  it('Should return "11" for 1 + 2', function () {
    assert.strictEqual(results1, "11")
  })
  it('Should return "111111" for 51 + 12', function () {
    let results2 = addBinary(51, 12)
    assert.strictEqual(results2, "111111")
  })
  it('Should return "1100100"', function () {
    let results3 = addBinary(100, 0)
    assert.strictEqual(results3, "1100100")
  })
})

describe("Random tests", function () {
  it("Should pass random tests", function () {
    let top = Math.pow(10, 15),
      a,
      b,
      actual,
      expected
    for (let i = 0; i < 50; i++) {
      a = Math.floor(Math.random() * top)
      b = Math.floor(Math.random() * top)
      expected = (a + b).toString(2)
      ;(actual = addBinary(a, b)), assert.strictEqual(actual, expected, "It should work for random inputs too")
    }
  })
})
