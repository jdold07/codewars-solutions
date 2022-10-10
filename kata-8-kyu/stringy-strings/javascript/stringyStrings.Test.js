//+ ====================================================================================================================
//+
//+ 8 kyu - Stringy Strings  [ ID: 563b74ddd19a3ad462000054 ] (stringy-strings)
//+ URL: https://www.codewars.com/kata/563b74ddd19a3ad462000054
//+ Category: ALGORITHMS  |  Tags: STRINGS | BINARY | ALGORITHMS
//+
//+ ====================================================================================================================

const { assert, expect } = require("chai")
const { stringy } = require("./stringyStrings")

describe("the stringy function", function () {
  it("Should return a string", function () {
    assert.strictEqual(
      typeof stringy(3),
      "string",
      "Make sure it's a string not a number (the function is called stringy after all!)"
    )
  })

  it("Should start with a 1", function () {
    assert.strictEqual(stringy(3)[0], "1", "Whoops your string doesnt start with a 1?")
  })

  it("Should have the correct length", function () {
    for (let i = 0; i < 10; ++i) {
      let parameter = (Math.random() * 50 + 1) | 0
      assert.strictEqual(stringy(parameter).length, parameter, "Wrong length on " + parameter)
    }
  })

  it("Should return the correct string", function () {
    let strings = []
    for (let i = 0; i < 20; i++) {
      let parameter = (Math.random() * 50 + 1) | 0
      strings.push(stringy(parameter))
    }
    let map = strings.map(function (str) {
      for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
          if (str[i] !== "1") return false
        } else {
          if (str[i] !== "0") return false
        }
      }
      return true
    })
    map.forEach((result) => expect(result, "whoops try again"))
  })
})
