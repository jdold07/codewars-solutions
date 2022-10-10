//+ ====================================================================================================================
//+
//+ 7 kyu - Count all the sheep on farm in the heights of New Zealand  [ ID: 58e0f0bf92d04ccf0a000010 ] (count-all-the-sheep-on-farm-in-the-heights-of-new-zealand)
//+ URL: https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS | ALGORITHMS | ALGEBRA
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { lostSheep } = require("./countAllTheSheepOnFarmInTheHeightsOfNewZealand")

it("Basic Tests", () => {
  assert.strictEqual(lostSheep([1, 2], [3, 4], 15), 5)
  assert.strictEqual(lostSheep([3, 1, 2], [4, 5], 21), 6)
  assert.strictEqual(lostSheep([5, 1, 4], [5, 4], 29), 10)
  assert.strictEqual(lostSheep([11, 23, 3, 4, 15], [7, 14, 9, 21, 15], 300), 178)
  assert.strictEqual(lostSheep([2, 7, 13, 17], [23, 56, 44, 12, 1, 2, 1], 255), 77)
  assert.strictEqual(lostSheep([2, 5, 8], [11, 23, 3, 4, 15, 112, 12, 4], 355), 156)
  assert.strictEqual(lostSheep([1, 1, 1, 2, 1, 2], [2, 1, 2, 1, 2, 1], 30), 13)
  assert.strictEqual(lostSheep([5, 10, 15], [11, 23, 3, 4, 15], 89), 3)
  assert.strictEqual(lostSheep([3, 6, 9, 12], [3, 2, 1, 2, 3, 1], 44), 2)
  assert.strictEqual(lostSheep([], [], 15), 15)
})

describe("Random test", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
  const sol = (f, s, t) => t - f.concat(s).reduce((a, b) => a + b, 0)

  for (let i = 0; i < 40; i++) {
    const f = Array.from({ length: randint(0, 10) }, () => randint(1, 20)),
      s = Array.from({ length: randint(0, 10) }, () => randint(1, 20))
    const t = f.concat(s).reduce((a, b) => a + b, 0) + randint(0, 100)
    it(`Testing for [${f}], [${s}] and ${t}`, () => {
      assert.strictEqual(lostSheep(f, s, t), sol(f, s, t), "It should work for random inputs too")
    })
  }
})
