//+ ====================================================================================================================
//+
//+ 7 kyu - Exes and Ohs  [ ID: 55908aad6620c066bc00002a ] (exes-and-ohs)
//+ URL: https://www.codewars.com/kata/55908aad6620c066bc00002a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { XO } = require("./exesAndOhs")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(XO("xo"), true)
    assert.strictEqual(XO("XO"), true)
    assert.strictEqual(XO("xo0"), true)
    assert.strictEqual(XO("xxxoo"), false)
    assert.strictEqual(XO("xxOo"), true)
    assert.strictEqual(XO(""), true, "Empty string contains equal amount of x and o")
    assert.strictEqual(XO("xxxxxoooxooo"), true)
    assert.strictEqual(XO("xxxm"), false)
    assert.strictEqual(XO("ooom"), false)
    assert.strictEqual(XO("Oo"), false)
    assert.strictEqual(XO("xxxxxxxooo"), false)
    assert.strictEqual(XO("abcdefghijklmnopqrstuvwxyz"), true, "Alphabet contains equal amount of x and o")
  })
})
