//+ ====================================================================================================================
//+
//+ 7 kyu - Search for letters  [ ID: 52dbae61ca039685460001ae ] (search-for-letters)
//+ URL: https://www.codewars.com/kata/52dbae61ca039685460001ae
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================


import { assert } from "chai"
import { change } from "./searchForLetters"





describe("Search for letters", () => {
  it("example tests", () => {
    assert.strictEqual(change("a **&  bZ"), "11000000000000000000000001")
  })
  it("fixed tests", () => {
    assert.strictEqual(change("Abc e  $$  z"), "11101000000000000000000001")
    assert.strictEqual(change("!!a$%&RgTT"), "10000010000000000101000000")
    assert.strictEqual(change(""), "00000000000000000000000000", "empty string should return 26 '0'")
    assert.strictEqual(change("abcdefghijklmnopqrstuvwxyz"), "11111111111111111111111111")
    assert.strictEqual(change("aaaaaaaaaaa"), "10000000000000000000000000")
    assert.strictEqual(change("&%&%/$%$%$%$%GYtf67fg34678hgfdyd"), "00010111000000000001000010")
  })
  it("random tests", () => {
    function refChange(string: string): string {
      const s = new Set(string.toLowerCase())
      return Array.from("abcdefghijklmnopqrstuvwxyz", (c) => Number(s.has(c))).join("")
    }
    const rnd = (n: number) => (Math.random() * n) | 0
    const rndStr = () => String.fromCharCode(...Array.from({ length: rnd(300) }, () => rnd(95) + 32))
    for (let i = 100; i--; ) {
      const arg = rndStr()
      assert.strictEqual(change(arg), refChange(arg))
    }
  })
})


