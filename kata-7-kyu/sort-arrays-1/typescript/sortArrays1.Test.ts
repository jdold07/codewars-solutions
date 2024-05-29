//+ ====================================================================================================================
//+
//+ 7 kyu - Sort arrays - 1  [ ID: 51f41b98e8f176e70d0002a8 ] (sort-arrays-1)
//+ URL: https://www.codewars.com/kata/51f41b98e8f176e70d0002a8
//+ Category: REFERENCE  |  Tags: SORTING | ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { sortMe } from "./sortArrays1"

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(sortMe(["one", "two", "three"]), ["one", "three", "two"])
  })
})

describe("Random tests", () => {
  const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  function randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  for (let i = 0; i < 100; i++) {
    const arr: string[] = [
      [...Array(randInt(3, 6))].map(() => [...Array(randInt(4, 10))].map(() => s[randInt(0, s.length - 1)])).join("")
    ]
    const expected = arr.sort()
    it(`Random test ... sortMe(${JSON.stringify(arr)}) => ${JSON.stringify(expected)}`, () => {
      assert.deepEqual(sortMe(arr.slice()), expected)
    })
  }
})
