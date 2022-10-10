//+ ====================================================================================================================
//+
//+ 8 kyu - Grasshopper - Order of operations  [ ID: 560ecf0cb040de130e00007d ] (grasshopper-order-of-operations)
//+ URL: https://www.codewars.com/kata/560ecf0cb040de130e00007d
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { orderOperations } = require("./grasshopperOrderOfOperations")

const func = orderOperations.toString()
describe("order of operations", () => {
  it("should not use any numbers other than 2", () => {
    let re = /[013-9]/g
    let others = func.match(re)
    assert.strictEqual(others, null)
  })
  it("should have the plus and the multiplication in the same place", () => {
    let re = /[+,*]/g
    let operators = func.match(re)
    assert.strictEqual(operators[0], "+")
    assert.strictEqual(operators[1], "*")
    assert.strictEqual(operators[2], "+")
    assert.strictEqual(operators[3], "*")
  })
  it("should get the correct number", () => {
    assert.strictEqual(orderOperations(), 32)
  })
})
