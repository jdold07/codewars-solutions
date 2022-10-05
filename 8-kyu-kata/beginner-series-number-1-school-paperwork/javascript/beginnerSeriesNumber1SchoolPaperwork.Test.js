// 8 kyu - Beginner Series #1 School Paperwork  [ ID: 55f9b48403f6b87a7c0000bd  (beginner-series-number-1-school-paperwork) ]
// URL: https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Simple Tests", function () {
  it("Testing for fixed tests", () => {
    assert.strictEqual(paperwork(5, 5), 25, "Failed at paperwork(5, 5)")
    assert.strictEqual(paperwork(5, -5), 0, "Failed at paperwork(5, -5)")
    assert.strictEqual(paperwork(-5, -5), 0, "Failed at paperwork(-5, -5)")
    assert.strictEqual(paperwork(-5, 5), 0, "Failed at paperwork(-5, 5)")
    assert.strictEqual(paperwork(5, 0), 0, "Failed at paperwork(5, 0)")
  })
})

describe("Random Tests", function () {
  let paperwork2 = (n, m) => (n * m > 0 && n > 0 ? n * m : 0)

  it("Testing for 100 random tests", () => {
    for (let i = 0; i < 100; i++) {
      let a = ~~(Math.random() * 201) - 100
      let b = ~~(Math.random() * 201) - 100
      assert.strictEqual(paperwork(a, b), paperwork2(a, b), `Testing for n = ${a}, m = ${b}`)
    }
  })
})
