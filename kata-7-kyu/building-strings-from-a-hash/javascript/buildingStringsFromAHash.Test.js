//+ ====================================================================================================================
//+
//+ 7 kyu - Building Strings From a Hash  [ ID: 51c7d8268a35b6b8b40002f2 ] (building-strings-from-a-hash)
//+ URL: https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { solution } = require("./buildingStringsFromAHash")

let result

describe("Tests", () => {
  it("test", () => {
    result = solution({ a: 1, b: 2 })
    assert.deepEqual(result, "a = 1,b = 2")
    result = solution({ b: 1, c: 2, e: 3 })
    assert.deepEqual(result, "b = 1,c = 2,e = 3")
    result = solution({})
    assert.deepEqual(result, "")
  })
})
