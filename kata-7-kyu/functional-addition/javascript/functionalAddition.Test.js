//+ ====================================================================================================================
//+
//+ 7 kyu - Functional Addition  [ ID: 538835ae443aae6e03000547 ] (functional-addition)
//+ URL: https://www.codewars.com/kata/538835ae443aae6e03000547
//+ Category: REFERENCE  |  Tags: FUNCTIONAL PROGRAMMING | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { add } = require("./functionalAddition")

describe("fixed tests", function () {
  it("basic tests", function () {
    assert.strictEqual(add(1)(3), 4, "add(1)(3)")
    assert.strictEqual(add(1)(-5), -4, "add(1)(-5)")
    assert.strictEqual(add(3)(20), 23, "add(3)(20)")

    let addThree = add(3)
    assert.strictEqual(addThree(5), 8, "add(3)(5)")
    assert.strictEqual(addThree(5), 8, "add(3)(5) again - make sure your add(3) is pure!")
  })
})

it("random calculations", function () {
  for (let i = 0; i < 100; i++) {
    let num1 = Math.floor(Math.random() * 1001) - 500
    let num2 = Math.floor(Math.random() * 1001) - 500
    assert.strictEqual(add(num1)(num2), num1 + num2, "Wrong result for " + num1 + " + " + num2)
  }
})
