//+ ====================================================================================================================
//+
//+ 8 kyu - Simple multiplication  [ ID: 583710ccaa6717322c000105 ] (simple-multiplication)
//+ URL: https://www.codewars.com/kata/583710ccaa6717322c000105
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================


const { assert } = require("chai")
const { simpleMultiplication } = require("./simpleMultiplication")





describe("Basic Tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(simpleMultiplication(2), 16, "Should return double given argument..")
    assert.strictEqual(simpleMultiplication(1), 9, "Should return double given argument..")
    assert.strictEqual(simpleMultiplication(8), 64, "Should return given argument times eight...")
    assert.strictEqual(simpleMultiplication(4), 32, "Should return given argument times eight...")
    assert.strictEqual(simpleMultiplication(5), 45, "Should return given argument times nine...")
  })
})

describe("Random Tests", function () {
  function theAnswer(number) {
    if (number % 2 == 0) {
      return number * 8
    } else {
      return number * 9
    }
  }

  it("Testing for 40 random tests", () => {
    for (let i = 0; i < 40; i++) {
      let num = Math.floor(Math.random() * (5 - 0) + 0)
      assert.strictEqual(simpleMultiplication(num), theAnswer(num), `Testing for number = ${num}`)
    }
  })
})


