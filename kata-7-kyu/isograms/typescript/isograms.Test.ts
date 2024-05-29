//+ ====================================================================================================================
//+
//+ 7 kyu - Isograms  [ ID: 54ba84be607a92aa900000f1 ] (isograms)
//+ URL: https://www.codewars.com/kata/54ba84be607a92aa900000f1
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { isIsogram } from "./isograms"

describe("Tests", function () {
  const lowers = "abcdefghijklmnopqrstuvwxyz",
    uppers = lowers.toUpperCase()
  const rnd = function (x: number) {
    return Math.floor(Math.random() * x)
  }
  const rndChr = function (str: string) {
    return str[Math.floor(rnd(str.length))]
  }
  const shuffle = function (str: string) {
    return str
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("")
  }

  it("Fixed tests", function () {
    assert.equal(isIsogram("Dermatoglyphics"), true)
    assert.equal(isIsogram("isogram"), true)
    assert.equal(isIsogram("moose"), false)
    assert.equal(isIsogram("isIsogram"), false)
    assert.equal(isIsogram("aba"), false, "same chars may not be adjacent")
    assert.equal(isIsogram("moOse"), false, "same chars may not be same case")
    assert.equal(isIsogram("thumbscrewjapingly"), true)
    assert.equal(isIsogram(""), true, "an empty string is a valid isogram")
  })
  it("More tests", function () {
    assert.equal(isIsogram(lowers), true)
    assert.equal(isIsogram(uppers), true)
    assert.equal(isIsogram(lowers + rndChr(lowers)), false)
    assert.equal(isIsogram(lowers + rndChr(uppers)), false)
  })
  it("Random tests", function () {
    for (let t = 0; t < 100; t++) {
      const cc = shuffle(lowers)
      let exp = true
      let chr
      let len = lowers.length
      let str = cc.slice(0, len)
      len = Math.min(3 + rnd(len), len)
      if (rnd(99) < 50) {
        chr = rndChr(str)
        if (rnd(99) < 50) chr = chr.toUpperCase()
        str = shuffle(shuffle(str + chr))
        exp = false
      }
      assert.equal(isIsogram(str), exp, str)
    }
  })
})
