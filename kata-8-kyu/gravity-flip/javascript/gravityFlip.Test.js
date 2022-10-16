//+ ====================================================================================================================
//+
//+ 8 kyu - Gravity Flip  [ ID: 5f70c883e10f9e0001c89673 ] (gravity-flip)
//+ URL: https://www.codewars.com/kata/5f70c883e10f9e0001c89673
//+ Category: GAMES  |  Tags: FUNDAMENTALS | PUZZLES
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { flip } = require("./gravityFlip")

describe("Solution", function () {
  it("fixed tests", function () {
    assert.deepEqual(flip("R", [4, 5, 6, 7, 1]), [1, 4, 5, 6, 7])
    assert.deepEqual(flip("L", [3, 0, 9, 8, 1, 2]), [9, 8, 3, 2, 1, 0])
    assert.deepEqual(flip("L", [0, 0, 12, 0, 1]), [12, 1, 0, 0, 0])
    assert.deepEqual(flip("R", [13, 2, 4, 7, 93]), [2, 4, 7, 13, 93])
    assert.deepEqual(flip("R", [5, 4, 3, 2, 1]), [1, 2, 3, 4, 5])
  })
  it("random tests", function () {
    for (let i = 0; i < 100; i++) {
      let a = []
      let d = Math.round(Math.random * 10) % 2 == 0 ? "R" : "L"
      for (let j = 0; j < 4 + Math.abs(Math.round(Math.random() * 246)); j++) {
        a.push(Math.abs(Math.round(Math.random() * 100)))
      }
      assert.deepEqual(flip(d, a.slice()), solve(d, a))
    }
  })
})

function solve(d, a) {
  return a.sort((x, y) => (d == "R" ? x - y : y - x))
}
