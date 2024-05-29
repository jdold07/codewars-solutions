//+ ====================================================================================================================
//+
//+ 8 kyu - Counting sheep...  [ ID: 54edbc7200b811e956000556 ] (counting-sheep-dot-dot-dot)
//+ URL: https://www.codewars.com/kata/54edbc7200b811e956000556
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { countSheeps } from "./countingSheepDotDotDot"

const array1 = [
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

const array2: (boolean | undefined | null)[] = []
for (let index = 0; index < 500; index++) array2.push(true)
for (let index = 0; index < 5; index++) array2.push(undefined)
for (let index = 0; index < 100; index++) array2.push(false)

const array3: (boolean | undefined | null)[] = []
for (let index = 0; index < 500; index++) array3.push(null)
for (let index = 0; index < 5; index++) array3.push(undefined)
for (let index = 0; index < 100; index++) array3.push(false)

describe("countSheeps", function () {
  it("should work correctly", () => {
    const result1 = countSheeps(array1)
    assert.strictEqual(result1, 17, "There are 17 sheeps in total, not " + result1)
    const result2 = countSheeps(array2)
    assert.strictEqual(result2, 500, "There are 500 sheeps in total, not " + result2)
    const result3 = countSheeps(array3)
    assert.strictEqual(result3, 0, "There are no sheeps at all, you counted " + result3)
  })
})
