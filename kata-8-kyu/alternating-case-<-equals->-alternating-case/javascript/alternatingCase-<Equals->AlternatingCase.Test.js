//+ ====================================================================================================================
//+
//+ 8 kyu - altERnaTIng cAsE <=> ALTerNAtiNG CaSe  [ ID: 56efc695740d30f963000557 ] (alternating-case-<-equals->-alternating-case)
//+ URL: https://www.codewars.com/kata/56efc695740d30f963000557
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
require("./alternatingCase-<Equals->AlternatingCase")

describe("String.prototype.toAlternatingCase", () => {
  it("should work for fixed tests (provided in the description)", () => {
    assert.strictEqual("hello world".toAlternatingCase(), "HELLO WORLD")
    assert.strictEqual("HELLO WORLD".toAlternatingCase(), "hello world")
    assert.strictEqual("hello WORLD".toAlternatingCase(), "HELLO world")
    assert.strictEqual("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld")
    assert.strictEqual("12345".toAlternatingCase(), "12345")
    assert.strictEqual("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E")
    assert.strictEqual("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE")
    assert.strictEqual("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World")
  })
  it("should not modify the original string", () => {
    let string = "string"
    assert.strictEqual(string.toAlternatingCase(), "STRING")
    assert.strictEqual(string, "string")
    assert.notStrictEqual(string, "STRING")
    for (let i = 0; i < 5; i++) {
      assert.strictEqual(string.toAlternatingCase(), "STRING") // If original string is mutated when the method is called, calling the method on the same string repeatedly would return alternating results instead of the same results every time
    }
    string = "hElLo wOrLd"
    assert.strictEqual(string.toAlternatingCase(), "HeLlO WoRlD")
    assert.strictEqual(string, "hElLo wOrLd")
    assert.notStrictEqual(string, "HeLlO WoRlD")
    for (let i = 0; i < 5; i++) {
      assert.strictEqual(string.toAlternatingCase(), "HeLlO WoRlD")
    }
  })
  it("should work for the title of this Kata", () => {
    let title = "altERnaTIng cAsE"
    title = title.toAlternatingCase()
    assert.strictEqual(title, "ALTerNAtiNG CaSe")
    title = title.toAlternatingCase()
    assert.strictEqual(title, "altERnaTIng cAsE")
    title = title.toAlternatingCase()
    assert.strictEqual(title, "ALTerNAtiNG CaSe")
    title = title.toAlternatingCase()
    assert.strictEqual(title, "altERnaTIng cAsE")
    title = "altERnaTIng cAsE <=> ALTerNAtiNG CaSe"
    title = title.toAlternatingCase()
    assert.strictEqual(title, "ALTerNAtiNG CaSe <=> altERnaTIng cAsE")
    title = title.toAlternatingCase()
    assert.strictEqual(title, "altERnaTIng cAsE <=> ALTerNAtiNG CaSe")
    title = title.toAlternatingCase()
    assert.strictEqual(title, "ALTerNAtiNG CaSe <=> altERnaTIng cAsE")
    title = title.toAlternatingCase()
    assert.strictEqual(title, "altERnaTIng cAsE <=> ALTerNAtiNG CaSe")
  })
  it("should finally work for random tests", () => {
    const solution = function (s) {
      return s
        .split("")
        .map((c) => (c == c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
        .join("")
    }

    const randint = require("lodash/random")
    const base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789   "
    const randword = (s, n) => Array.from({ length: n }, () => s[randint(0, s.length - 1)]).join("")

    for (let i = 0; i < 200; i++) {
      let randStr = randword(base, randint(1, 20))
      assert.strictEqual(randStr.toAlternatingCase(), solution(randStr))
    }
  })
})
