//+ ====================================================================================================================
//+
//+ 8 kyu - Grasshopper - Combine strings  [ ID: 55f73f66d160f1f1db000059 ] (grasshopper-combine-strings)
//+ URL: https://www.codewars.com/kata/55f73f66d160f1f1db000059
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { combineNames } = require("./grasshopperCombineStrings")

describe("combine names", function () {
  it("fixed tests", function () {
    assert.strictEqual(combineNames("James", "Stevens"), "James Stevens")
  })
  it("random tests", function () {
    let abc = "abcdefghijklmnopqrstuvwxyz"
    const randLen = () => Math.floor(Math.random() * 9) + 2
    const name = (l) => Array.from({ length: l }, () => abc[Math.floor(Math.random() * 25)]).join("")
    const solution = (first, last) => first + " " + last
    for (let i = 0; i < 100; i++) {
      let first = name(randLen())
      let last = name(randLen())
      assert.strictEqual(combineNames(first, last), solution(first, last))
    }
  })
})
