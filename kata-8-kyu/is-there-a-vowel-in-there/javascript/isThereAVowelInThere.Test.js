//+ ====================================================================================================================
//+
//+ 8 kyu - Is there a vowel in there?  [ ID: 57cff961eca260b71900008f ] (is-there-a-vowel-in-there)
//+ URL: https://www.codewars.com/kata/57cff961eca260b71900008f
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { isVow } = require("./isThereAVowelInThere")

it("Basic tests", () => {
  assert.deepEqual(isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106]), [
    118,
    "u",
    120,
    121,
    "u",
    98,
    122,
    "a",
    120,
    106,
    104,
    116,
    113,
    114,
    113,
    120,
    106
  ])
  assert.deepEqual(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]), [
    "e",
    121,
    110,
    113,
    113,
    103,
    121,
    121,
    "e",
    107,
    103
  ])
  assert.deepEqual(isVow([118, 103, 110, 109, 104, 106]), [118, 103, 110, 109, 104, 106])
  assert.deepEqual(isVow([107, 99, 110, 107, 118, 106, 112, 102]), [107, 99, 110, 107, 118, 106, 112, 102])
  assert.deepEqual(isVow([100, 100, 116, 105, 117, 121]), [100, 100, 116, "i", "u", 121])
})

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a
  function myisVow(s) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] == 97) s[i] = "a"
      else if (s[i] == 101) s[i] = "e"
      else if (s[i] == 105) s[i] = "i"
      else if (s[i] == 111) s[i] = "o"
      else if (s[i] == 117) s[i] = "u"
    }
    return s
  }
  let nums = [
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122
  ]

  for (let i = 0; i < 40; i++) {
    let s = [],
      len = randint(1, 20)
    for (let k = 0; k < len; k++) s.push(nums[randint(0, nums.length - 1)])

    it(`Testing for ${s}`, () => {
      assert.deepEqual(isVow(s.slice()), myisVow(s), "It should work for random inputs too")
    })
  }
})
