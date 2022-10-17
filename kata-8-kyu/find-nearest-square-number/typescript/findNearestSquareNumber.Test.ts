//+ ====================================================================================================================
//+
//+ 8 kyu - Find Nearest square number  [ ID: 5a805d8cafa10f8b930005ba ] (find-nearest-square-number)
//+ URL: https://www.codewars.com/kata/5a805d8cafa10f8b930005ba
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { nearestSq } from "./findNearestSquareNumber"

// TODO Add your tests here
describe("Basic tests", () => {
  it("basic tests", () => {
    assert.equal(nearestSq(1), 1)
    assert.equal(nearestSq(2), 1)
    assert.equal(nearestSq(10), 9)
    assert.equal(nearestSq(111), 121)
    assert.equal(nearestSq(9999), 10000)
  })
})

console.log("<COMPLETEDIN::>")

describe("Small Random Tests", () => {
  it("Small Random Tests", () => {
    for (let i = 0; i < 100; i++) {
      const num: number = Math.floor(Math.random() * 200000)
      if (num > 1) {
        const sol: number = Math.pow(Math.round(Math.pow(num, 0.5)), 2)
        assert.equal(nearestSq(num), sol, "It should work for random inputs too")
      }
    }
  })
  console.log("<COMPLETEDIN::>")
})

describe("Big Random Tests", () => {
  it("Big Random Tests", () => {
    for (let i = 0; i < 1000; i++) {
      const num: number = Math.floor(Math.random() * 2000000)
      if (num > 499) {
        const sol: number = Math.pow(Math.round(Math.pow(num, 0.5)), 2)
        assert.equal(nearestSq(num), sol, "It should work for random inputs too")
      }
    }
  })
  console.log("<COMPLETEDIN::>")
})
