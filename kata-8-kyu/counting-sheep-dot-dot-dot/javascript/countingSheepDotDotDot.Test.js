//+ ====================================================================================================================
//+
//+ 8 kyu - Counting sheep...  [ ID: 54edbc7200b811e956000556 ] (counting-sheep-dot-dot-dot)
//+ URL: https://www.codewars.com/kata/54edbc7200b811e956000556
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { countSheeps } = require("./countingSheepDotDotDot")

describe("Tests", () => {
  it("test", () => {
    let array1 = [
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true
    ]

    let array2 = []
    for (let index = 0; index < 500; index++) array2.push(true)
    for (let index = 0; index < 5; index++) array2.push(undefined)
    for (let index = 0; index < 100; index++) array2.push(false)

    let array3 = []
    for (let index = 0; index < 500; index++) array3.push(null)
    for (let index = 0; index < 5; index++) array3.push(undefined)
    for (let index = 0; index < 100; index++) array3.push(false)

    assert.strictEqual(countSheeps(array1), 17, "There are 17 sheeps in total, not " + countSheeps(array1))
    assert.strictEqual(countSheeps(array2), 500, "There are 500 sheeps in total, not " + countSheeps(array2))
    assert.strictEqual(countSheeps(array3), 0, "There are no sheeps at all, you counted " + countSheeps(array3))
  })
})
