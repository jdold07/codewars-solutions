//+ ====================================================================================================================
//+
//+ 7 kyu - Basic Sequence Practice  [ ID: 5436f26c4e3d6c40e5000282 ] (basic-sequence-practice)
//+ URL: https://www.codewars.com/kata/5436f26c4e3d6c40e5000282
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { sumOfN } = require("./basicSequencePractice")

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(sumOfN(3), [0, 1, 3, 6])
    assert.deepEqual(sumOfN(-4), [0, -1, -3, -6, -10])
    assert.deepEqual(sumOfN(1), [0, 1])
    assert.deepEqual(sumOfN(0), [0])
    assert.deepEqual(sumOfN(10), [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55])
  })
})
