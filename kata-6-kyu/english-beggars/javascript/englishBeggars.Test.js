//+ ====================================================================================================================
//+
//+ 6 kyu - English beggars  [ ID: 59590976838112bfea0000fa ] (english-beggars)
//+ URL: https://www.codewars.com/kata/59590976838112bfea0000fa
//+ Category: REFERENCE  |  Tags: QUEUES | ARRAYS | LISTS | RECURSION | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { beggars } = require("./englishBeggars")

it("Basic tests", () => {
  assert.deepEqual(beggars([1, 2, 3, 4, 5], 1), [15])
  assert.deepEqual(beggars([1, 2, 3, 4, 5], 2), [9, 6])
  assert.deepEqual(beggars([1, 2, 3, 4, 5], 3), [5, 7, 3])
  assert.deepEqual(beggars([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 0])
  assert.deepEqual(beggars([1, 2, 3, 4, 5], 0), [])
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
  const sol = (v, n) =>
    v.reduce(
      (a, b, i) => {
        a[i % n] += b
        return a
      },
      [...Array(n)].map(() => 0)
    )

  for (let q = 0; q < 40; q++) {
    const v = [...Array(randint(3, 40))].map(() => randint(1, Math.pow(10, randint(1, 3)))),
      n = randint(1, 20)
    it(`Testing for [${v.join(", ")}] and ${n}`, () => {
      assert.deepEqual(beggars(v, n), sol(v, n), "It should work for random inputs too")
    })
  }
})
