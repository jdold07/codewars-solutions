// 8 kyu - Function 3 - multiplying two numbers  [ ID: 523b66342d0c301ae400003b  (function-3-multiplying-two-numbers) ]
// URL: https://www.codewars.com/kata/523b66342d0c301ae400003b
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
import solution = require("./solution")
import { assert } from "chai"

describe("Testing multiply", function () {
  it("Should be a function", function () {
    assert.equal(typeof solution.multiply, "function")
  })

  it("Should return 15 multiplications correctly", function () {
    function getRandom(n: number): number {
      return Math.random() * n - Math.random() * n
    }

    for (let i: number = 0; i < 15; i++) {
      let x: number = getRandom(100)
      let y: number = getRandom(100)
      assert.equal(solution.multiply(x, y), x * y, `Testing for a = ${x}, b = ${y}`)
    }
  })
})
