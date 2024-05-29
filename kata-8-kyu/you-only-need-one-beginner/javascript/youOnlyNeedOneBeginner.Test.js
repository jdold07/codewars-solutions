//+ ====================================================================================================================
//+
//+ 8 kyu - You only need one - Beginner  [ ID: 57cc975ed542d3148f00015b ] (you-only-need-one-beginner)
//+ URL: https://www.codewars.com/kata/57cc975ed542d3148f00015b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { check } = require("./youOnlyNeedOneBeginner")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(check([66, 101], 66), true)
    assert.strictEqual(check([78, 117, 110, 99, 104, 117, 107, 115], 8), false)
    assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true)
    assert.strictEqual(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true)
    assert.strictEqual(check(["t", "e", "s", "t"], "e"), true)
    assert.strictEqual(check(["what", "a", "great", "kata"], "kat"), false)
    // eslint-disable-next-line no-sparse-arrays
    assert.strictEqual(check([66, , "codewars", 11, "alex loves pushups"], "alex loves pushups"), true)
    assert.strictEqual(check(["come", "on", 110, "2500", 10, "!", 7, 15], "Come"), false)
    assert.strictEqual(check(["when's", "the", "next", "Katathon?", 9, 7], "Katathon?"), true)
    assert.strictEqual(check([8, 7, 5, "bored", "of", "writing", "tests", 115], 45), false)
    assert.strictEqual(check(["anyone", "want", "to", "hire", "me?"], "me?"), true)
  })
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a

  function mycheck(a, x) {
    return a.some((z) => z == x)
  }

  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  it("Testing for 40 random tests", () => {
    for (let i = 0; i < 40; i++) {
      const a = []
      const len = randint(1, 20)
      let x = Number(nums[randint(0, nums.length - 1)])
      for (let k = 0; k < len; k++) {
        a.push(nums[randint(0, nums.length - 1)])
      }
      assert.strictEqual(check(a, x), mycheck(a, x), `Testing for ${(a, x)}`)
    }
  })
})
