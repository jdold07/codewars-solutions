//+ ====================================================================================================================
//+
//+ 7 kyu - Spacify  [ ID: 57f8ee485cae443c4d000127 ] (spacify)
//+ URL: https://www.codewars.com/kata/57f8ee485cae443c4d000127
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
//+
//+ ====================================================================================================================

const { randomToken } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { spacify } = require("./spacify")

describe("spacify", function () {
  it("basic tests", function () {
    assert.equal(spacify("hello world"), "h e l l o   w o r l d")
    assert.equal(spacify("12345"), "1 2 3 4 5")
  })
  it("random tests", function () {
    for (let i = 0; i <= 100; i += 1) {
      let str = randomToken()
      assert.equal(spacify(str), str.split("").join(" "))
    }
  })
})
