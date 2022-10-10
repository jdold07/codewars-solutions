//+ ====================================================================================================================
//+
//+ 7 kyu - Factorial  [ ID: 57a049e253ba33ac5e000212 ] (factorial-1)
//+ URL: https://www.codewars.com/kata/57a049e253ba33ac5e000212
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { factorial } = require("./factorial1")

describe("Basic tests", () => {
  assert.strictEqual(factorial(0), 1)
  assert.strictEqual(factorial(1), 1)
  assert.strictEqual(factorial(4), 24)
  assert.strictEqual(factorial(7), 5040)
  assert.strictEqual(factorial(17), 355687428096000)
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
  const sol = (n) => Array.from({ length: n }, (a, i) => i + 1).reduce((a, b) => a * b, 1)

  for (let i = 0; i < 40; i++) {
    let n = randint(0, 17)
    it(`Testing for ${n}`, () => {
      assert.strictEqual(factorial(n), sol(n), "It should work for random inputs too")
    })
  }
})
