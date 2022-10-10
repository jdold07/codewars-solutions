//+ ====================================================================================================================
//+
//+ 4 kyu - Vigenère Cipher Helper  [ ID: 52d1bd3694d26f8d6e0000d3 ] (vigenere-cipher-helper)
//+ URL: https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS | CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS
//+
//+ ====================================================================================================================

const { randomToken } = require("../../../utils/cwUtils")
const { assert } = require("chai")
const { VigenèreCipher } = require("./vigenereCipherHelper")

let desc = "Testing with lowercase latin alphabet"
describe(desc, function () {
  let abc = "abcdefghijklmnopqrstuvwxyz"

  it("Password of 'password'", function () {
    let c = new VigenèreCipher("password", abc)

    assert.strictEqual(c.encode("codewars"), "rovwsoiv")
    assert.strictEqual(c.decode("rovwsoiv"), "codewars")
    assert.strictEqual(c.encode("waffles"), "laxxhsj")
    assert.strictEqual(c.decode("laxxhsj"), "waffles")
    assert.strictEqual(c.encode("it's a shift cipher!"), "xt'k o vwixl qzswej!")
    assert.strictEqual(c.decode("xt'k o vwixl qzswej!"), "it's a shift cipher!")
  })
  it("Password of 'pizza'", function () {
    let c = new VigenèreCipher("pizza", abc)

    assert.strictEqual(c.encode("asodavwt"), "pancakes")
    assert.strictEqual(c.decode("pancakes"), "asodavwt")
    assert.strictEqual(c.encode("javascript"), "yiuzsrzhot")
    assert.strictEqual(c.decode("yiuzsrzhot"), "javascript")
  })
  it("Password of 'attackatdawn', random tokens", function () {
    let c = new VigenèreCipher("attackatdawn", abc)
    let i, token
    for (i = 0; i < 5; i++) {
      token = randomToken()
      assert.strictEqual(c.decode(c.encode(token)), token)
    }
  })
})

desc = "Testing with katakana alphabet"
describe(desc, function () {
  let abc =
    "アイウエオァィゥェォカキクケコサシスセソタチツッテトナニヌネノハヒフヘホマミムメモヤャユュヨョラリルレロワヲンー"
  it("Password of 'カタカナ'", function () {
    let c = new VigenèreCipher("カタカナ", abc)

    assert.strictEqual(c.encode("カタカナ"), "タモタワ")
    assert.strictEqual(c.decode("タモタワ"), "カタカナ")
    assert.strictEqual(c.encode("javascript"), "javascript")
    assert.strictEqual(c.decode("javascript"), "javascript")
    assert.strictEqual(c.encode("ドモアリガトゴザイマス"), "ドオカセガヨゴザキアニ")
    assert.strictEqual(c.decode("ドオカセガヨゴザキアニ"), "ドモアリガトゴザイマス")
  })
})
