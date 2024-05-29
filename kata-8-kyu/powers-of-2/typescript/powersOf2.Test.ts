//+ ====================================================================================================================
//+
//+ 8 kyu - Powers of 2  [ ID: 57a083a57cb1f31db7000028 ] (powers-of-2)
//+ URL: https://www.codewars.com/kata/57a083a57cb1f31db7000028
//+ Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { shuffle as _shuffle } from "lodash"
import { assert } from "vitest"
import { powersOfTwo } from "./powersOf2"

describe("Basic Tests", function () {
  it("Testing for fixed tests", () => {
    assert.deepEqual(powersOfTwo(0), [1])
    assert.deepEqual(powersOfTwo(1), [1, 2])
    assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16])
  })
})

describe("Random Tests", function () {
  const solution = (n: number): number[] => [...Array(n + 1)].map((x, y) => Math.pow(2, y))
  const shuffle = _shuffle([...Array(201)].map((x, y) => y))

  it("Testing for 201 random tests", () => {
    for (const n in shuffle) {
      assert.deepEqual(powersOfTwo(shuffle[n]), solution(shuffle[n]), `Testing for n = ${n}`)
    }
  })
})
