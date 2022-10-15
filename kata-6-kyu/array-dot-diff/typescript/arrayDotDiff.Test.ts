//+ ====================================================================================================================
//+
//+ 6 kyu - Array.diff  [ ID: 523f5d21c841566fde000009 ] (array-dot-diff)
//+ URL: https://www.codewars.com/kata/523f5d21c841566fde000009
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { arrayDiff } from "./arrayDotDiff"

describe("Basic tests", () => {
  it("Basic test should work", () => {
    assert.deepEqual(arrayDiff([1, 2], [1]), [2], "a was [1, 2], b was [1]")
    assert.deepEqual(arrayDiff([1, 2, 2], [1]), [2, 2], "a was [1, 2, 2], b was [1]")
    assert.deepEqual(arrayDiff([1, 2, 2], [2]), [1], "a was [1, 2, 2], b was [2]")
    assert.deepEqual(arrayDiff([1, 2, 2], []), [1, 2, 2], "a was [1, 2, 2], b was []")
    assert.deepEqual(arrayDiff([], [1, 2]), [], "a was [], b was [1, 2]")
    assert.deepEqual(arrayDiff([1, 2, 3], [1, 2]), [3], "a was [1, 2, 3], b was [1, 2]")
  })
})

describe("Random tests", () => {
  function solution(a: number[], b: number[]) {
    return a.filter((el) => !b.includes(el))
  }

  function randomNumber(min: number, max: number) {
    return ~~(Math.random() * (max - min + 1)) + min
  }

  function randomArray(length: number) {
    return Array(length)
      .fill(0)
      .map(() => randomNumber(0, 99))
  }

  for (let i = 0; i < 40; i += 1) {
    const a = randomArray(randomNumber(0, 40))
    const b = randomArray(randomNumber(0, 40))

    it(`Testing for arrayDiff([${a}], [${b}])`, () => {
      assert.deepEqual(arrayDiff([...a], [...b]), solution(a, b))
    })
  }
})
