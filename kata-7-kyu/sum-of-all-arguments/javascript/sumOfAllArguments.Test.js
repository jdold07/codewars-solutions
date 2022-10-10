//+ ====================================================================================================================
//+
//+ 7 kyu - Sum of all arguments  [ ID: 540c33513b6532cd58000259 ] (sum-of-all-arguments)
//+ URL: https://www.codewars.com/kata/540c33513b6532cd58000259
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { sum } = require("./sumOfAllArguments")

describe("Tests", () => {
  it("test", () => {
    function mySolution() {
      let total = 0
      for (let i in arguments) {
        i = arguments[i]
        total += i
      }
      return total
    }

    const randArray = function () {
      let res = [Math.floor(51 * Math.random())]
      while (Math.random() < 0.75) res.push(Math.floor(51 * Math.random()))
      return res
    }

    console.log("Simple tests:")
    assert.strictEqual(sum(1), 1)
    assert.strictEqual(sum(1, 2), 3)
    assert.strictEqual(sum(5, 7, 9), 21)
    assert.strictEqual(sum(12, 1, 1, 1, 1), 16)
    assert.strictEqual(sum(12, 1, 1, 1, 1, 1, 1), 18)

    console.log("Random tests:")
    for (let i = 0; i < 10; i++) {
      let curr = randArray()
      assert.strictEqual(mySolution.apply(null, curr), sum.apply(null, curr))
    }
  })
})
