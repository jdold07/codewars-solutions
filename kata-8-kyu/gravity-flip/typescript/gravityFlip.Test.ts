//+ ====================================================================================================================
//+
//+ 8 kyu - Gravity Flip  [ ID: 5f70c883e10f9e0001c89673 ] (gravity-flip)
//+ URL: https://www.codewars.com/kata/5f70c883e10f9e0001c89673
//+ Category: GAMES  |  Tags: FUNDAMENTALS | PUZZLES
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { flip } from "./gravityFlip"

const randInt = (a: number, b: number): number => (Math.random() * (b - a + 1) + a) | 0
const flip_sol = (d: string, a: number[]) => [...a].sort((a, b) => (d === "R" ? a - b : b - a))

describe("Gravity Flip", () => {
  it("Fixed tests", () => {
    assert.deepEqual(flip("R", [4, 5, 6, 7, 1]), [1, 4, 5, 6, 7])
    assert.deepEqual(flip("L", [3, 0, 9, 8, 1, 2]), [9, 8, 3, 2, 1, 0])
    assert.deepEqual(flip("L", [0, 0, 12, 0, 1]), [12, 1, 0, 0, 0])
    assert.deepEqual(flip("R", [13, 2, 4, 7, 93]), [2, 4, 7, 13, 93])
    assert.deepEqual(flip("R", [5, 4, 3, 2, 1]), [1, 2, 3, 4, 5])
  })

  it("Random tests", () => {
    for (let i = 1; i <= 100; i++) {
      const arr = [...Array(randInt(4, 100))].map(() => randInt(0, 100))
      const dir = Math.random() > 0.5 ? "R" : "L"
      const expected = flip_sol(dir, arr)
      const actual = flip(dir, arr)
      assert.deepEqual(actual, expected)
    }
  })
})
