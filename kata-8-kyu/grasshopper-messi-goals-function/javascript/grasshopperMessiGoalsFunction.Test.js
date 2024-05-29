//+ ====================================================================================================================
//+
//+ 8 kyu - Grasshopper - Messi goals function  [ ID: 55f73be6e12baaa5900000d4 ] (grasshopper-messi-goals-function)
//+ URL: https://www.codewars.com/kata/55f73be6e12baaa5900000d4
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { goals } = require("./grasshopperMessiGoalsFunction")

describe("goals test", function () {
  it("should be 0", function () {
    assert.strictEqual(goals(0, 0, 0), 0)
  })
  it("should be 58", function () {
    assert.strictEqual(goals(43, 10, 5), 58)
  })
  it("should work for random numbers", function () {
    let solution = (ll, cl, cdr) => ll + cl + cdr
    for (let i = 0; i < 100; i++) {
      let l = Math.floor(Math.random() * 50)
      let c = Math.floor(Math.random() * 20)
      let r = Math.floor(Math.random() * 10)
      assert.strictEqual(solution(l, c, r), goals(l, c, r))
    }
  })
})
