//+ ====================================================================================================================
//+
//+ 7 kyu - Find min and max  [ ID: 57a1ae8c7cb1f31e4e000130 ] (find-min-and-max)
//+ URL: https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { getMinMax } = require("./findMinAndMax")

describe("Basic tests", function () {
  it("Basic Teats", () => {
    assert.deepEqual(getMinMax([1]), [1, 1])
    assert.deepEqual(getMinMax([1, 2]), [1, 2])
    assert.deepEqual(getMinMax([2, 1]), [1, 2])
  })
})

describe("Random tests", function () {
  it("Basic Teats", () => {
    for (let i = 0; i < 100; i++) {
      let r = Math.floor(Math.random() * 20) + 5
      let res = []
      for (let j = 0; j < r; j++) {
        let n = Math.floor(Math.random() * 20) + 5
        res.push(n)
      }
      let expected = getMinMax_po97y(res)
      assert.deepEqual(getMinMax(res), expected)
    }
  })
})

function getMinMax_po97y(arr) {
  return [Math.min(...arr), Math.max(...arr)]
}
