//+ ====================================================================================================================
//+
//+ 8 kyu - Find Multiples of a Number  [ ID: 58ca658cc0d6401f2700045f ] (find-multiples-of-a-number)
//+ URL: https://www.codewars.com/kata/58ca658cc0d6401f2700045f
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { findMultiples } = require("./findMultiplesOfANumber")

describe("Basic Tests", () => {
  it("Should work with basic tests", function () {

  assert.deepEqual(findMultiples(5, 25), [5, 10, 15, 20, 25])
  assert.deepEqual(findMultiples(1, 2), [1, 2])
  assert.deepEqual(findMultiples(5, 7), [5])
  assert.deepEqual(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
  assert.deepEqual(findMultiples(11, 54), [11, 22, 33, 44])
})
})

describe("Randomt Tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
  const sol = (n, l) => Array.from({ length: ~~(l / n) }, (a, i) => i * n + n)

  for (let i = 0; i < 40; i++) {
    const n = randint(1, 20),
      l = n + randint(1, Math.pow(10, randint(0, 4)))
    it(`Testing for ${n} and ${l}`, () => {
      assert.deepEqual(findMultiples(n, l), sol(n, l), "It should work for random inputs too")
    })
  }
})
