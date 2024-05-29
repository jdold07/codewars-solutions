//+ ====================================================================================================================
//+
//+ 8 kyu - Return Negative  [ ID: 55685cd7ad70877c23000102 ] (return-negative)
//+ URL: https://www.codewars.com/kata/55685cd7ad70877c23000102
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { makeNegative } from "./returnNegative"

describe("makeNegative", function () {
  it("Sample tests", function () {
    assert.equal(makeNegative(42), -42)
    assert.equal(makeNegative(-9), -9)
    assert.equal(makeNegative(0), 0)
    assert.equal(makeNegative(1), -1)
    assert.equal(makeNegative(-1), -1)
  })
  it("Random tests", function () {
    for (let i = 0; i < 100; ++i) {
      const n = ~~(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
      const sol = n < 0 ? n : -n
      assert.equal(makeNegative(n), sol, `Testing for num = ${n}`)
    }
  })
})
