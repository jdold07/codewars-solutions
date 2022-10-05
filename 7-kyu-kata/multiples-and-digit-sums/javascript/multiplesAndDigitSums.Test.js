// 7 kyu - Multiples and Digit Sums  [ ID: 58ca77b9c0d640ecd2000b1e  (multiples-and-digit-sums) ]
// URL: https://www.codewars.com/kata/58ca77b9c0d640ecd2000b1e
// Category: ALGORITHMS  |  Tags: ALGORITHMS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert

describe("Solution", function () {
  it("Fixed Test", function () {
    assert.strictEqual(procedure(30), 18)
    assert.strictEqual(procedure(12), 72)
    assert.strictEqual(procedure(49), 30)
    assert.strictEqual(procedure(17), 48)
    assert.strictEqual(procedure(10), 46)
  })

  function ans(n) {
    let Text = ""
    let Sum = 0
    for (let i = 0; i < 101; i += n) {
      Text += i
    }
    for (let x of Text) {
      Sum += Number(x)
    }
    return Sum
  }

  it("Random Tests", function () {
    function randInt(a, b) {
      return (Math.random() * (b - a + 1) + a) | 0
    }
    for (let i = 0; i < 20; i++) {
      const X = randInt(1, 100)
      assert.strictEqual(procedure(X), ans(X))
    }
  })

  it("Full Test", function () {
    for (let i = 1; i <= 100; i++) {
      assert.strictEqual(procedure(i), ans(i))
    }
  })
})
