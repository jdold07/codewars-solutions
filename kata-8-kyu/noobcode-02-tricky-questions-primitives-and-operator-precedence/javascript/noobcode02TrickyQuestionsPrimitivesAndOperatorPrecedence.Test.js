//+ ====================================================================================================================
//+
//+ 8 kyu - noobCode 02: TRICKY QUESTIONS ( primitives and operator precedence)  [ ID: 572269697297444c570008b9 ] (noobcode-02-tricky-questions-primitives-and-operator-precedence)
//+ URL: https://www.codewars.com/kata/572269697297444c570008b9
//+ Category: GAMES  |  Tags: PUZZLES
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { greaterThanLessThan } = require("./noobcode02TrickyQuestionsPrimitivesAndOperatorPrecedence")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(greaterThanLessThan(1, 2, 3), true)
    assert.strictEqual(greaterThanLessThan(3, 2, 1), true)
    assert.strictEqual(greaterThanLessThan(3, 2, 4), true)
    assert.strictEqual(greaterThanLessThan(Number(null), 0, 1), true)
    assert.strictEqual(greaterThanLessThan(10, 20, 30), true)
    assert.strictEqual(greaterThanLessThan(123456789, 234567899, 34578999), true)
    assert.strictEqual(greaterThanLessThan(700000000001, 700000000002, -1), false)
    assert.strictEqual(greaterThanLessThan(-6, -5, 1), false)
    assert.strictEqual(greaterThanLessThan(6, 5, -6), false)

    function gTLTcheck(a, b, c) {
      return a < b < c
    }

    for (let i = 0; i < 25; i++) {
      let a = Math.round(Math.random() * 10 ** Math.random())
      let b = Math.round(Math.random() * 10 ** Math.random())
      let c = Math.round(Math.random() * 10 ** Math.random())
      assert.strictEqual(greaterThanLessThan(a, b, c), gTLTcheck(a, b, c))
    }
  })
})
