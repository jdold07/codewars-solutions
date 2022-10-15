//+ ====================================================================================================================
//+
//+ 6 kyu - Counting Duplicates  [ ID: 54bf1c2cd5b56cc47f0007a1 ] (counting-duplicates)
//+ URL: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { duplicateCount } from "./countingDuplicates"

describe("Tests", function () {
  const lowers = "abcdefghijklmnopqrstuvwxyz"
  const uppers = lowers.toUpperCase()
  it("Fixed tests", function () {
    assert.equal(duplicateCount(""), 0)
    assert.equal(duplicateCount("abcde"), 0)
    assert.equal(duplicateCount("aabbcde"), 2)
    assert.equal(duplicateCount("aabBcde"), 2, "should ignore case")
    assert.equal(duplicateCount("Indivisibility"), 1)
    assert.equal(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
    assert.equal(duplicateCount(lowers), 0)
    assert.equal(duplicateCount(lowers + "baaAAB"), 2, "characters may not be adjacent")
    assert.equal(duplicateCount(lowers + lowers), 26)
    assert.equal(duplicateCount(lowers + uppers), 26, "should ignore case")
  })
  it("Random tests", function () {
    const rnd = function (x: number): number {
      return Math.floor(Math.random() * x)
    }

    for (let t = 0; t < 100; t++) {
      let len = 3 + rnd(5),
        i = len + 1,
        str = lowers.slice(0, len * 2)
      if (rnd(100) < 70) {
        while (i-- > 0) str += [lowers, uppers][rnd(2)].slice(0, i)
      } else {
        str += lowers.slice(-len)
        len = 0
      }
      assert.equal(duplicateCount(str), len, str)
    }
  })
})
