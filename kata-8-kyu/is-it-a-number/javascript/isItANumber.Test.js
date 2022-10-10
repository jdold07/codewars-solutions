//+ ====================================================================================================================
//+
//+ 8 kyu - Is it a number?  [ ID: 57126304cdbf63c6770012bd ] (is-it-a-number)
//+ URL: https://www.codewars.com/kata/57126304cdbf63c6770012bd
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { isDigit } = require("./isItANumber")

describe("Solution", function () {
  it("basic tests", function () {
    let input = "s2324"
    assert.strictEqual(isDigit(input), false)

    input = "3 4"
    assert.strictEqual(isDigit(input), false)

    input = "3-4"
    assert.strictEqual(isDigit(input), false)

    input = "3  4   "
    assert.strictEqual(isDigit(input), false)

    input = "34.65"
    assert.strictEqual(isDigit(input), true)

    input = "-0"
    assert.strictEqual(isDigit(input), true)

    input = " "
    assert.strictEqual(isDigit(input), false)

    input = ""
    assert.strictEqual(isDigit(input), false)

    input = "0.0"
    assert.strictEqual(isDigit(input), true)

    input = "ab"
    assert.strictEqual(isDigit(input), false)

    input = "ab  cd"
    assert.strictEqual(isDigit(input), false)
  })

  it("random", function () {
    for (let i = 0; i < 100; i++) {
      let a = Math.random()
      let aa = "" + a
      let b = Math.random()
      let bb = "" + b
      let c = Math.random()
      let cc = "" + c
      let dd = "fsda243fs"

      assert.strictEqual(isDigit(aa), true)
      assert.strictEqual(isDigit(bb), true)
      assert.strictEqual(isDigit(cc), true)
      assert.strictEqual(isDigit(dd), false)
    }
  })
})
