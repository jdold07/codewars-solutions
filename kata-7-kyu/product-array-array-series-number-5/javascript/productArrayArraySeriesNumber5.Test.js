//+ ====================================================================================================================
//+
//+ 7 kyu - Product  Array (Array Series #5)  [ ID: 5a905c2157c562994900009d ] (product-array-array-series-number-5)
//+ URL: https://www.codewars.com/kata/5a905c2157c562994900009d
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { productArray } = require("./productArrayArraySeriesNumber5")

it("Basic Tests", () => {
  assert.deepEqual(productArray([12, 20]), [20, 12])
  assert.deepEqual(productArray([3, 27, 4, 2]), [216, 24, 162, 324])
  assert.deepEqual(productArray([13, 10, 5, 2, 9]), [900, 1170, 2340, 5850, 1300])
  assert.deepEqual(productArray([16, 17, 4, 3, 5, 2]), [2040, 1920, 8160, 10880, 6528, 16320])
})

describe("Random Tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1) + a)
  const sol = (n) => ((p) => n.map((e) => p / e))(n.reduce((a, b) => a * b))

  for (let i = 0; i < 40; i++) {
    const n = Array.from({ length: randint(2, 10) }, () => randint(1, Math.pow(10, randint(1, 2))))
    it(`Testing for [${n.join(", ")}]`, () => {
      assert.deepEqual(productArray([].concat(n)), sol(n), "It should work for random inputs too")
    })
  }
})
