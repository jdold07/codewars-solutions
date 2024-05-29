//+ ====================================================================================================================
//+
//+ 6 kyu - Atbash Cipher Helper  [ ID: 52f2f5ecc807c0ab1a00001a ] (atbash-cipher-helper)
//+ URL: https://www.codewars.com/kata/52f2f5ecc807c0ab1a00001a
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS | CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { AtbashCipher } = require("./atbashCipherHelper")

let desc = "Testing with Latin lowercase alphabet"
it(desc, function () {
  const abc = "abcdefghijklmnopqrstuvwxyz"
  const c = new AtbashCipher(abc)
  assert.strictEqual(c.encode("abc"), "zyx")
  assert.strictEqual(c.encode("zyx"), "abc")
  assert.strictEqual(c.decode("abc"), "zyx")
  assert.strictEqual(c.decode("zyx"), "abc")
  assert.strictEqual(c.encode("codewars"), "xlwvdzih")
  assert.strictEqual(c.decode("codewars"), "xlwvdzih")
  assert.strictEqual(c.encode("xlwvdzih"), "codewars")
  assert.strictEqual(c.decode("xlwvdzih"), "codewars")
  assert.strictEqual(c.encode("CODEWARS"), "CODEWARS")
  assert.strictEqual(c.encode("WARCODES"), "WARCODES")
})

desc = "Testing with described Hebrew alphabet"
it(desc, function () {
  const abc = "אבגדהוזחטיכלמנסעפצקרשת"
  const c = new AtbashCipher(abc)
  assert.strictEqual(c.encode("\u05d0\u05d1\u05d2"), "\u05ea\u05e9\u05e8")
  assert.strictEqual(c.encode("\u05ea\u05e9\u05e8"), "\u05d0\u05d1\u05d2")
  assert.strictEqual(c.decode("\u05d0\u05d1\u05d2"), "\u05ea\u05e9\u05e8")
  assert.strictEqual(c.decode("\u05ea\u05e9\u05e8"), "\u05d0\u05d1\u05d2")

  assert.strictEqual(c.encode("\u05e9\u05e9\u05db"), "\u05d1\u05d1\u05dc")
  assert.strictEqual(c.decode("\u05d1\u05d1\u05dc"), "\u05e9\u05e9\u05db")
  assert.strictEqual(c.encode("\u05e9\u05e9\u05db"), "\u05d1\u05d1\u05dc")
  assert.strictEqual(c.decode("\u05d1\u05d1\u05dc"), "\u05e9\u05e9\u05db")

  assert.strictEqual(c.encode("\u05dc\u05d1\u05e7\u05de\u05d9"), "\u05db\u05e9\u05d3\u05d9\u05de")
  assert.strictEqual(c.decode("\u05db\u05e9\u05d3\u05d9\u05de"), "\u05dc\u05d1\u05e7\u05de\u05d9")
  assert.strictEqual(c.encode("\u05db\u05e9\u05d3\u05d9\u05de"), "\u05dc\u05d1\u05e7\u05de\u05d9")
  assert.strictEqual(c.decode("\u05dc\u05d1\u05e7\u05de\u05d9"), "\u05db\u05e9\u05d3\u05d9\u05de")
})

desc = "Testing with Greek uppercase alphabet"
it(desc, function () {
  const abc = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ"
  const c = new AtbashCipher(abc)
  assert.strictEqual(c.encode("ΑΒΓ"), "ΩΨΧ")
  assert.strictEqual(c.encode("ΩΨΧ"), "ΑΒΓ")
  assert.strictEqual(c.decode("ΑΒΓ"), "ΩΨΧ")
  assert.strictEqual(c.decode("ΩΨΧ"), "ΑΒΓ")
  assert.strictEqual(c.encode("ΑΓΑΠΗ"), "ΩΧΩΙΣ")
  assert.strictEqual(c.decode("ΩΧΩΙΣ"), "ΑΓΑΠΗ")
  assert.strictEqual(c.decode("ΑΓΑΠΗ"), "ΩΧΩΙΣ")
  assert.strictEqual(c.encode("ΚΩΔΙΚΟΣ"), "ΟΑΦΠΟΚΗ")
  assert.strictEqual(c.decode("ΟΑΦΠΟΚΗ"), "ΚΩΔΙΚΟΣ")
  assert.strictEqual(c.encode("ΜΑΧΗ"), "ΝΩΓΣ")
  assert.strictEqual(c.encode("ΝΩΓΣ"), "ΜΑΧΗ")
})
