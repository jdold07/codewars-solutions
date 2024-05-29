//+ ====================================================================================================================
//+
//+ 7 kyu - Two to One  [ ID: 5656b6906de340bd1b0000ac ] (two-to-one)
//+ URL: https://www.codewars.com/kata/5656b6906de340bd1b0000ac
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { longest } = require("./twoToOne")

describe("longest", function () {
  it("Basic tests", function () {
    assert.strictEqual(longest("aretheyhere", "yestheyarehere"), "aehrsty")
    assert.strictEqual(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
    assert.strictEqual(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
    assert.strictEqual(longest("lordsofthefallen", "gamekult"), "adefghklmnorstu")
    assert.strictEqual(longest("codewars", "codewars"), "acdeorsw")
    assert.strictEqual(longest("agenerationmustconfrontthelooming", "codewarrs"), "acdefghilmnorstuw")
  })
})

describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }
  function longestSol(s1, s2) {
    let alpha_s1 = Array(27)
      .join(1)
      .split("")
      .map(function () {
        return 0
      })
    let alpha_s2 = Array(27)
      .join(1)
      .split("")
      .map(function () {
        return 0
      })
    let l1 = s1.length
    let l2 = s2.length
    let res = ""
    let i = 0
    let c = 0
    for (i = 0; i < l1; i++) {
      c = s1.charCodeAt(i)
      if (c >= 97 && c <= 122) alpha_s1[c - 97]++
    }
    for (i = 0; i < l2; i++) {
      c = s2.charCodeAt(i)
      if (c >= 97 && c <= 122) alpha_s2[c - 97]++
    }
    for (i = 0; i < 26; i++) {
      if (alpha_s1[i] !== 0) {
        res += String.fromCharCode(i + 97)
        alpha_s2[i] = 0
      }
    }
    for (i = 0; i < 26; i++) {
      if (alpha_s2[i] !== 0) res += String.fromCharCode(i + 97)
    }
    return res.split("").sort().join("")
  }
  //................
  function doEx(k) {
    let i = 0,
      res = ""
    while (i < 15) {
      let sm = String.fromCharCode(randint(97 + k, 122))
      for (let j = 0; j < randint(1, 5); j++) res += sm
      i++
    }
    return res
  }
  //................
  for (let i = 0; i < 200; i++) {
    let s1 = doEx(randint(0, 10))
    let s2 = doEx(randint(0, 8))
    it("Testing longest: ", function () {
      assert.strictEqual(longest(s1, s2), longestSol(s1, s2), "It should work for random tests too")
    })
  }
})
