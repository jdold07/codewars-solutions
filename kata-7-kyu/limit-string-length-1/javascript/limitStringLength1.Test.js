//+ ====================================================================================================================
//+
//+ 7 kyu - Limit string length - 1  [ ID: 5208fc3cb613bc725f000142 ] (limit-string-length-1)
//+ URL: https://www.codewars.com/kata/5208fc3cb613bc725f000142
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { solution } = require("./limitStringLength1")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(solution("Testing String", 3), "Tes...", "Unexpected result")
    assert.strictEqual(solution("Testing String", 8), "Testing ...", "Unexpected result")
    assert.strictEqual(solution("Test", 10), "Test", 'solution("Test", 10) did not return "Test"')
    assert.strictEqual(solution("Test", 4), "Test", 'solution("Test", 4) did not return "Test"')
  })
})
