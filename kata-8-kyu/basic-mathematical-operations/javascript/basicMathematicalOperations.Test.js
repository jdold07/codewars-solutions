//+ ====================================================================================================================
//+
//+ 8 kyu - Basic Mathematical Operations  [ ID: 57356c55867b9b7a60000bd7 ] (basic-mathematical-operations)
//+ URL: https://www.codewars.com/kata/57356c55867b9b7a60000bd7
//+ Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { basicOp } = require("./basicMathematicalOperations")

describe("Tests", () => {
  it("test", () => {
    console.log("Basic tests\n")
    assert.deepEqual(basicOp("+", 4, 7), 11)
    assert.deepEqual(basicOp("-", 15, 18), -3)
    assert.deepEqual(basicOp("*", 5, 5), 25)
    assert.deepEqual(basicOp("/", 49, 7), 7)

    console.log("Random tests\n")
    console.log("+\n")
    for (let i = 0; i < 5; i++) {
      let temp = Math.floor(Math.random() * 1005)
      let temp2 = Math.floor(Math.random() * 1005)
      assert.deepEqual(basicOp("+", temp, temp2), temp + temp2)
    }
    console.log("-\n")
    for (let i = 0; i < 5; i++) {
      let temp = Math.floor(Math.random() * 1005)
      let temp2 = Math.floor(Math.random() * 1005)
      assert.deepEqual(basicOp("-", temp, temp2), temp - temp2)
    }
    console.log("*\n")
    for (let i = 0; i < 5; i++) {
      let temp = Math.floor(Math.random() * 1005)
      let temp2 = Math.floor(Math.random() * 1005)
      assert.deepEqual(basicOp("*", temp, temp2), temp * temp2)
    }
    console.log("/\n")
    for (let i = 0; i < 5; i++) {
      let temp = Math.floor(Math.random() * 1005)
      let temp2 = Math.floor(Math.random() * 1005)
      assert.deepEqual(basicOp("/", temp, temp2), temp / temp2)
    }
  })
})
