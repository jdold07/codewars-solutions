//+ ====================================================================================================================
//+
//+ 8 kyu - Find Maximum and Minimum Values of a List  [ ID: 577a98a6ae28071780000989 ] (find-maximum-and-minimum-values-of-a-list)
//+ URL: https://www.codewars.com/kata/577a98a6ae28071780000989
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { min, max } = require("./findMaximumAndMinimumValuesOfAList")

let sol1 = function (list) {
  let result = list[0]
  for (let i = 1; i < list.length; i++) {
    if (result > list[i]) result = list[i]
  }
  return result
}

let sol2 = function (list) {
  let result = list[0]
  for (let i = 1; i < list.length; i++) {
    if (result < list[i]) result = list[i]
  }
  return result
}

describe("Find Minimum and Maximum Values", function () {
  it("Fixed Min", function () {
    assert.strictEqual(min([-52, 56, 30, 29, -54, 0, -110]), -110)
    assert.strictEqual(min([42, 54, 65, 87, 0]), 0)
    assert.strictEqual(min([1, 2, 3, 4, 5, 10]), 1)
    assert.strictEqual(min([-1, -2, -3, -4, -5, -10]), -10)
  })
  it("Fixed Max", function () {
    assert.strictEqual(max([-52, 56, 30, 29, -54, 0, -110]), 56)
    assert.strictEqual(max([4, 6, 2, 1, 9, 63, -134, 566]), 566)
    assert.strictEqual(max([5]), 5)
    assert.strictEqual(max([534, 43, 2, 1, 3, 4, 5, 5, 443, 443, 555, 555]), 555)
  })
  it("Random Tests", function () {
    for (let i = 0; i < 10; i++) {
      let rand_lng = ~~(Math.random() * 13) + 1,
        rand_list = []
      for (let l = 0; l < rand_lng; l++) {
        rand_list.push(~~(100000 * Math.random() - 20000))
      }

      assert.strictEqual(min([].concat(rand_list)), sol1(rand_list))
      assert.strictEqual(max([].concat(rand_list)), sol2(rand_list))
    }
  })
})
