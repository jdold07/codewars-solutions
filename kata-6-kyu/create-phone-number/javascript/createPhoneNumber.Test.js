//+ ====================================================================================================================
//+
//+ 6 kyu - Create Phone Number  [ ID: 525f50e3b73515a6db000b83 ] (create-phone-number)
//+ URL: https://www.codewars.com/kata/525f50e3b73515a6db000b83
//+ Category: ALGORITHMS  |  Tags: ARRAYS | STRINGS | REGULAR EXPRESSIONS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { createPhoneNumber } = require("./createPhoneNumber")

describe("Create Phone Number", () => {
  it("Fixed tests", () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111")
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
  })

  it("Random tests", () => {
    const sol = (a) => `(${a.slice(0, 3).join("")}) ${a.slice(3, 6).join("")}-${a.slice(6).join("")}`
    for (let i = 0; i < 100; i++) {
      const a = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)),
        exp = sol(a)
      assert.strictEqual(createPhoneNumber(a), exp, `Testing for numbers = ${JSON.stringify(a)}`)
    }
  })
})
