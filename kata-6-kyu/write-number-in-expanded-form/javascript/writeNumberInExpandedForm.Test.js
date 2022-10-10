//+ ====================================================================================================================
//+
//+ 6 kyu - Write Number in Expanded Form  [ ID: 5842df8ccbd22792a4000245 ] (write-number-in-expanded-form)
//+ URL: https://www.codewars.com/kata/5842df8ccbd22792a4000245
//+ Category: REFERENCE  |  Tags: STRINGS | MATHEMATICS | ALGORITHMS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { expandedForm } = require("./writeNumberInExpandedForm")

describe("Basic Tests", function () {
  it("Basic Tests", function () {
    assert.strictEqual(expandedForm(2), "2")
    assert.strictEqual(expandedForm(12), "10 + 2")
    assert.strictEqual(expandedForm(42), "40 + 2")
    assert.strictEqual(expandedForm(4982342), "4000000 + 900000 + 80000 + 2000 + 300 + 40 + 2")
  })
})

describe("Edge Cases", function () {
  it("Zeros", function () {
    assert.strictEqual(expandedForm(420370022), "400000000 + 20000000 + 300000 + 70000 + 20 + 2")
    assert.strictEqual(expandedForm(70304), "70000 + 300 + 4")
    assert.strictEqual(expandedForm(9000000), "9000000")
  })

  it("Big Numbers", function () {
    assert.strictEqual(
      expandedForm(92093403034573),
      "90000000000000 + 2000000000000 + 90000000000 + 3000000000 + 400000000 + 3000000 + 30000 + 4000 + 500 + 70 + 3"
    )
    assert.strictEqual(
      expandedForm(2096039485293),
      "2000000000000 + 90000000000 + 6000000000 + 30000000 + 9000000 + 400000 + 80000 + 5000 + 200 + 90 + 3"
    )
  })
})

function solution(num) {
  let x = -1
  num = num
    .toString()
    .split("")
    .reverse()
    .map(function (i) {
      x++
      return i + "0".repeat(x)
    })
  return num
    .filter((i) => !/^0+$/.test(i))
    .reverse()
    .join(" + ")
}

describe("Random Tests", function () {
  for (let test = 0; test < 100; test++) {
    let num = 1 + Math.floor(Math.random() * 100000000)
    it("Random Test", function () {
      assert.strictEqual(expandedForm(num), solution(num))
    })
  }
})
