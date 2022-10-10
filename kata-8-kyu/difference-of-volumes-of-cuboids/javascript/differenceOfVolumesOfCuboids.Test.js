//+ ====================================================================================================================
//+
//+ 8 kyu - Difference of Volumes of Cuboids  [ ID: 58cb43f4256836ed95000f97 ] (difference-of-volumes-of-cuboids)
//+ URL: https://www.codewars.com/kata/58cb43f4256836ed95000f97
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const funcToBeTested = require("./differenceOfVolumesOfCuboids").findDifference

describe("Tests", function () {
  it("Basic tests", function () {
    assert.strictEqual(funcToBeTested([3, 2, 5], [1, 4, 4]), 14)
    assert.strictEqual(funcToBeTested([9, 7, 2], [5, 2, 2]), 106)
    assert.strictEqual(funcToBeTested([11, 2, 5], [1, 10, 8]), 30)
    assert.strictEqual(funcToBeTested([4, 4, 7], [3, 9, 3]), 31)
    assert.strictEqual(funcToBeTested([15, 20, 25], [10, 30, 25]), 0)
  })

  it("Random tests", function () {
    function randint(low, up) {
      return Math.floor(Math.random() * (up - low + 1) + low)
    }

    for (let i = 0; i < 100; i++) {
      let a = [randint(1, 30), randint(1, 30), randint(1, 30)]
      let b = [randint(1, 30), randint(1, 30), randint(1, 30)]
      let correct = Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2])
      assert.strictEqual(funcToBeTested(a, b), correct, `Testing for a = ${JSON.stringify(a)}, b = ${JSON.stringify(b)}`)
    }
  })
})
