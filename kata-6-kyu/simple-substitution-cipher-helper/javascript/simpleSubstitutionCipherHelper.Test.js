//+ ====================================================================================================================
//+
//+ 6 kyu - Simple Substitution Cipher Helper  [ ID: 52eb114b2d55f0e69800078d ] (simple-substitution-cipher-helper)
//+ URL: https://www.codewars.com/kata/52eb114b2d55f0e69800078d
//+ Category: ALGORITHMS  |  Tags: CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

const { randomToken, randomize } = require("../../../utils/cwUtils")
const { assert } = require("chai")
const { SubstitutionCipher } = require("./simpleSubstitutionCipherHelper")

it("Test Group", () => {
  let abc1 = "abcdefghijklmnopqrstuvwxyz"
  let abc2 = "etaoinshrdlucmfwypvbgkjqxz"
  let sub = new SubstitutionCipher(abc1, abc2)
  assert.strictEqual(sub.encode("abc"), "eta")
  assert.strictEqual(sub.encode("xyz"), "qxz")
  assert.strictEqual(sub.encode("aeiou"), "eirfg")
  assert.strictEqual(sub.decode("eta"), "abc")
  assert.strictEqual(sub.decode("qxz"), "xyz")
  assert.strictEqual(sub.decode("eirfg"), "aeiou")

  abc2 = "tfozcivbsjhengarudlkpwqxmy"
  sub = new SubstitutionCipher(abc1, abc2)
  assert.strictEqual(sub.encode("abc"), "tfo")
  assert.strictEqual(sub.decode("tfo"), "abc")
  assert.strictEqual(sub.encode("tjuukf"), "kjpphi")
  assert.strictEqual(sub.decode("kjpphi"), "tjuukf")
  assert.strictEqual(sub.decode("tjuukf"), "ajqqtb")
  assert.strictEqual(sub.encode("ajqqtb"), "tjuukf")

  assert.strictEqual(sub.encode("a_bc&*83"), "t_fo&*83")
  assert.strictEqual(sub.decode("t_fo*&83"), "a_bc*&83")

  abc1 = randomize(abc1.split("")).join("")
  abc2 = randomize(abc1.split("")).join("")

  sub = new SubstitutionCipher(abc1, abc2)
  for (let i = 0; i < 8; i++) {
    let str = randomToken()
    let cmp = str
      .split("")
      .map(function (x) {
        let i = abc1.indexOf(x)
        return i < 0 ? x : abc2[i]
      })
      .join("")
    assert.strictEqual(sub.encode(str), cmp)
    cmp = str
      .split("")
      .map(function (x) {
        let i = abc2.indexOf(x)
        return i < 0 ? x : abc1[i]
      })
      .join("")
    assert.strictEqual(sub.decode(str), cmp)
  }
})
