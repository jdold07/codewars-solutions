// 8 kyu - Function 3 - multiplying two numbers  [ ID: 523b66342d0c301ae400003b  (function-3-multiplying-two-numbers) ]
// URL: https://www.codewars.com/kata/523b66342d0c301ae400003b
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert

function getRandom() {
  return (Math.random() * 1000 - 500) | 0
}

describe("Testing multiply", function () {
  it("Should return 10 multiplications correctly", function () {
    for (let i = 0; i < 10; i++) {
      let x = getRandom(),
        y = getRandom()
      assert.strictEqual(multiply(x, y), x * y, "that's not the correct multiplication!")
    }
  })
})
