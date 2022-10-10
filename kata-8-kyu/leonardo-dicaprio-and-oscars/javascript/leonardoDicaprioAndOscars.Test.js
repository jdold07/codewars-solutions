//+ ====================================================================================================================
//+
//+ 8 kyu - Leonardo Dicaprio and Oscars  [ ID: 56d49587df52101de70011e4 ] (leonardo-dicaprio-and-oscars)
//+ URL: https://www.codewars.com/kata/56d49587df52101de70011e4
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { leo } = require("./leonardoDicaprioAndOscars")

describe("Tests", () => {
  it("test", () => {
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    assert.strictEqual(leo(88), "Leo finally won the oscar! Leo is happy")
    assert.strictEqual(leo(87), "When will you give Leo an Oscar?")
    assert.strictEqual(leo(86), "Not even for Wolf of wallstreet?!")
    assert.strictEqual(leo(random(1, 85)), "When will you give Leo an Oscar?")
    assert.strictEqual(leo(random(1, 85)), "When will you give Leo an Oscar?")
    assert.strictEqual(leo(random(1, 85)), "When will you give Leo an Oscar?")
    assert.strictEqual(leo(random(89, 150)), "Leo got one already!")
    assert.strictEqual(leo(random(89, 150)), "Leo got one already!")
    assert.strictEqual(leo(random(89, 150)), "Leo got one already!")
  })
})
