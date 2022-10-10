//+ ====================================================================================================================
//+
//+ 5 kyu - Caesar Cipher Helper  [ ID: 526d42b6526963598d0004db ] (caesar-cipher-helper)
//+ URL: https://www.codewars.com/kata/526d42b6526963598d0004db
//+ Category: ALGORITHMS  |  Tags: CIPHERS | OBJECT-ORIENTED PROGRAMMING | STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

const { randomToken } = require("../../../utils/cwUtils")
const { assert } = require("chai")
const { CaesarCipher } = require("./caesarCipherHelper")

describe("Testing the CaesarCipher class", function () {
  let c
  it("Shift of 5", function () {
    c = new CaesarCipher(5)

    assert.strictEqual(c.encode("Codewars"), "HTIJBFWX")
    assert.strictEqual(c.decode("HTIJBFWX"), "CODEWARS")
    assert.strictEqual(c.encode("WAFFLES"), "BFKKQJX")
    assert.strictEqual(c.decode("BFKKQJX"), "WAFFLES")
    assert.strictEqual(c.encode("IT'S A SHIFT CIPHER!!"), "NY'X F XMNKY HNUMJW!!")
    assert.strictEqual(c.decode("NY'X F XMNKY HNUMJW!!"), "IT'S A SHIFT CIPHER!!")
  })
  it("Shift of 13", function () {
    c = new CaesarCipher(13)
    let rs

    assert.strictEqual(c.encode("CNAPNXRF"), "PANCAKES")
    assert.strictEqual(c.decode("PANCAKES"), "CNAPNXRF")
    assert.strictEqual(c.encode("JAVASCRIPT"), "WNINFPEVCG")
    assert.strictEqual(c.decode("WNINFPEVCG"), "JAVASCRIPT")
    for (let i = 0; i < 5; i++) {
      rs = randomToken().toUpperCase()
      assert.strictEqual(c.decode(c.encode(rs)), rs)
    }
  })
  it("Shift of 26", function () {
    c = new CaesarCipher(26)
    let rs

    for (let i = 0; i < 7; i++) {
      rs = randomToken().toUpperCase()
      assert.strictEqual(c.decode(rs), rs)
      assert.strictEqual(c.encode(rs), rs)
    }
  })
})
