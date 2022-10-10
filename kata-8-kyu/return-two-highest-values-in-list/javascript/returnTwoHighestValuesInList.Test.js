//+ ====================================================================================================================
//+
//+ 8 kyu - Return Two Highest Values in List  [ ID: 57ab3c09bb994429df000a4a ] (return-two-highest-values-in-list)
//+ URL: https://www.codewars.com/kata/57ab3c09bb994429df000a4a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | LISTS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { twoHighest } = require("./returnTwoHighestValuesInList")

const _ = require("lodash")

function solution(arr) {
  let newArr = [...new Set(arr)]
  let sorted = newArr.sort((a, b) => b - a)
  switch (sorted.length) {
    case 0:
      return []
    case 1:
      return [sorted[0]]
    default:
      return [sorted[0], sorted[1]]
  }
}

describe("Fixed Tests", () => {
  it("Tests", () => {
    assert.deepEqual(twoHighest([]), [])
    assert.deepEqual(twoHighest([15]), [15])
    assert.deepEqual(twoHighest([15, 20, 20, 17]), [20, 17])
  })
})

describe("Random Tests", () => {
  it("Tests", () => {
    for (let i = 0; i < 200; i++) {
      const randArr = Array.from({ length: _.random(0, 50) }, () => _.random(1, 100000))
      const randArrCopy = randArr.slice()
      Object.freeze(randArrCopy)
      let actual = twoHighest(randArr)
      let expected = solution(randArrCopy)
      assert.deepEqual(actual, expected, `Testing for [${randArrCopy}]`)
    }
  })
})
