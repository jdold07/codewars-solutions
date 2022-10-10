//+ ====================================================================================================================
//+
//+ 8 kyu - Kata Example Twist  [ ID: 525c1a07bb6dda6944000031 ] (kata-example-twist)
//+ URL: https://www.codewars.com/kata/525c1a07bb6dda6944000031
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { expect } = require("chai")
const { websites } = require("./kataExampleTwist")

describe("Tests", () => {
  it("test", () => {
    expect(websites.length > 0, "The array is still empty")
    expect(websites.length == 1000, "The array does not equal 1,000")
    expect(
      websites.every(function (e) {
        return e == "codewars"
      }),
      'Every element in the array must contain the value "codewars"'
    )
  })
})
