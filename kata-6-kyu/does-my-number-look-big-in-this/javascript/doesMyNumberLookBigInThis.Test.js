//+ ====================================================================================================================
//+
//+ 6 kyu - Does my number look big in this?  [ ID: 5287e858c6b5a9678200083c ] (does-my-number-look-big-in-this)
//+ URL: https://www.codewars.com/kata/5287e858c6b5a9678200083c
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { narcissistic } = require("./doesMyNumberLookBigInThis")

describe("Narcissistic Function", function () {
  it("should find small numbers are all narcissistic", function () {
    assert.strictEqual(narcissistic(1), true, "1 is narcissistic")
    assert.strictEqual(narcissistic(5), true, "5 is narcissistic")
    assert.strictEqual(narcissistic(7), true, "7 is narcissistic")
  })

  it("should find these numbers are narcissistic", function () {
    assert.strictEqual(narcissistic(153), true, "153 is narcissistic")
    assert.strictEqual(narcissistic(370), true, "370 is narcissistic")
    assert.strictEqual(narcissistic(371), true, "371 is narcissistic")
    assert.strictEqual(narcissistic(1634), true, "1634 is narcissistic")
  })

  it("should find these numbers are not narcissistic", function () {
    const tests = Math.floor(Math.random() * 10) + 5
    for (let i = 0; i <= tests; ++i) {
      const value = Math.floor(Math.random() * 42000) + 9475
      assert.strictEqual(narcissistic(value), false, value + " is not narcissistic")
    }
  })

  let bigguns = [8208, 9474, 54748, 92727, 93084, 548834, 1741725, 4210818, 9800817, 9926315, 24678050, 24678051]

  it("should find that some of these are narcissistic", function () {
    let tests = Math.floor(Math.random() * 10) + 15

    for (let i = 0; i <= tests; ++i) {
      let is = Math.random() > 0.5
      const value = is
        ? bigguns[Math.floor(Math.random() * (bigguns.length - 1))]
        : Math.floor(Math.random() * 1400000) + 9926316
      assert.strictEqual(narcissistic(value), is, value + " may be...")
    }
  })
})
