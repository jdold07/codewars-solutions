//+ ====================================================================================================================
//+
//+ 8 kyu - Invert values  [ ID: 5899dc03bc95b1bf1b0000ad ] (invert-values)
//+ URL: https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
//+ Category: REFERENCE  |  Tags: LISTS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { invert } = require("./invertValues")

describe("Invert array values", () => {
  it("Basic Tests", () => {
    assert.deepEqual(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5])
    assert.deepEqual(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5])
    assert.deepEqual(invert([]), [])
    assert.deepEqual(invert([0]), [-0])
  })

  it("Random Tests", function () {
    function rand(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    }

    function sol(array) {
      return array.map((n) => -n)
    }

    function generateArr() {
      let arr = [],
        n = rand(5, 100)
      for (let i = 0; i < n; i++) {
        arr.push(rand(-100, 100))
      }
      return arr
    }

    for (let i = 0; i < 100; i++) {
      let v = generateArr()
      assert.deepEqual(invert(v.slice()), sol(v), `Testing for array = ${JSON.stringify(v)}`)
    }
  })
})
