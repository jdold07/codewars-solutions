//+ ====================================================================================================================
//+
//+ 7 kyu - Exes and Ohs  [ ID: 55908aad6620c066bc00002a ] (exes-and-ohs)
//+ URL: https://www.codewars.com/kata/55908aad6620c066bc00002a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { xo } from "./exesAndOhs"

describe("xo", function () {
  it("Basic Tests", function () {
    assert.strictEqual(xo("xo"), true)
    assert.strictEqual(xo("XO"), true)
    assert.strictEqual(xo("xo0"), true)
    assert.strictEqual(xo("xxxoo"), false)
    assert.strictEqual(xo("xxOo"), true)
    assert.strictEqual(xo(""), true, "Empty string contains equal amount of x and o")
    assert.strictEqual(xo("xxxxxoooxooo"), true)
    assert.strictEqual(xo("xxxm"), false)
    assert.strictEqual(xo("ooom"), false)
    assert.strictEqual(xo("Oo"), false)
    assert.strictEqual(xo("abcdefghijklmnopqrstuvwxyz"), true, "Alphabet contains equal amount of x and o")
  })
  it("Random tests", function () {
    const base = "xoXO"
    const sol = (str: string) => (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length
    for (let i = 0; i < 100; i++) {
      let arr
      if (Math.random() > 0.5) {
        arr = Array(Math.floor(Math.random() * 20) + 10)
          .fill(0)
          .map(() => base[Math.floor(Math.random() * base.length)])
      } else {
        const l = Math.floor(Math.random() * 10)
        arr = Array(l)
          .fill("x")
          .concat(Array(l).fill("o"))
          .map((x) => (Math.random() > 0.5 ? x.toUpperCase() : x))
          .sort(() => 0.5 - Math.random())
      }
      const str = arr.join("")
      assert.strictEqual(xo(str), sol(str))
    }
  })
})
