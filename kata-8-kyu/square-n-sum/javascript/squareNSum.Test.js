//+ ====================================================================================================================
//+
//+ 8 kyu - Square(n) Sum  [ ID: 515e271a311df0350d00000f ] (square-n-sum)
//+ URL: https://www.codewars.com/kata/515e271a311df0350d00000f
//+ Category: REFERENCE  |  Tags: ARRAYS | LISTS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert, expect } = require("chai")
const { squareSum } = require("./squareNSum")

describe("Basic Tests", function () {
  it("Should pass sample tests", function () {
    expect(squareSum([1, 2])).to.be.a("number")
    assert.strictEqual(squareSum([1, 2]), 5)
    assert.strictEqual(squareSum([0, 3, 4, 5]), 50)
    assert.strictEqual(squareSum([]), 0)
    assert.strictEqual(squareSum([-1, -2]), 5)
    assert.strictEqual(squareSum([-1, 0, 1]), 2)
  })
})

describe("Random Tests", function () {
  const squareSol = (n) => n.reduce((p, c) => p + c * c, 0)
  let arrLen, testArr
  for (let i = 0; i < 40; i++) {
    arrLen = Math.floor(Math.random() * 9) + 2
    testArr = []
    for (let j = 0; j < arrLen; j++) {
      testArr.push(Math.floor(Math.random() * 41) - 20)
    }
    let expected = squareSol(testArr),
      actual = squareSum(testArr.slice())
    it("Testing for [" + testArr + "]", function () {
      assert.strictEqual(actual, expected, "It should work for random tests too")
    })
  }
})
