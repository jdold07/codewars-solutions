//+ ====================================================================================================================
//+
//+ 7 kyu - Return the first M multiples of N  [ ID: 593c9175933500f33400003e ] (return-the-first-m-multiples-of-n)
//+ URL: https://www.codewars.com/kata/593c9175933500f33400003e
//+ Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { multiples } = require("./returnTheFirstMMultiplesOfN")

describe("Kata Tests", function () {
  it("Basic Tests", function () {
    assert.deepEqual(multiples(3, 5), [5, 10, 15])
    assert.deepEqual(multiples(1, 3.14), [3.14])
    assert.deepEqual(multiples(5, -1), [-1, -2, -3, -4, -5])
  })
  it("Random Tests", function () {
    function multiples_test(m, n) {
      const result = []
      for (let i = 1; i <= m; i++) result.push(n * i)
      return result
    }

    for (let i = 0; i < 100; i++) {
      let m = Math.round(Math.random() * 100),
        n = Math.round(Math.random() * 50)
      assert.deepEqual(multiples(m, n), multiples_test(m, n))
    }
  })
})
