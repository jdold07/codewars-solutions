//+ ====================================================================================================================
//+
//+ 6 kyu - Keyword Cipher Helper  [ ID: 535c1c80cdbf5011e600030f ] (keyword-cipher-helper)
//+ URL: https://www.codewars.com/kata/535c1c80cdbf5011e600030f
//+ Category: REFACTORING  |  Tags: CRYPTOGRAPHY | CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS
//+
//+ ====================================================================================================================

const { randomToken, randomize } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { KeywordCipher } = require("./keywordCipherHelper")

it("Group test so they actually run", () => {
  let abc = "abcdefghijklmnopqrstuvwxyz"
  let key = "keyword"
  let sub = new KeywordCipher(abc, key)
  assert.strictEqual(sub.encode("abc"), "key")
  assert.strictEqual(sub.encode("xyz"), "vxz")
  assert.strictEqual(sub.encode("aeiou"), "kobjs")
  assert.strictEqual(sub.decode("key"), "abc")
  assert.strictEqual(sub.decode("vxz"), "xyz")
  assert.strictEqual(sub.decode("kobjs"), "aeiou")

  key = "codewars"
  sub = new KeywordCipher(abc, key)
  assert.strictEqual(sub.encode("abc"), "cod")
  assert.strictEqual(sub.encode("xyz"), "xyz")
  assert.strictEqual(sub.encode("aeiou"), "cwbkt")
  assert.strictEqual(sub.decode("cod"), "abc")
  assert.strictEqual(sub.decode("xyz"), "xyz")
  assert.strictEqual(sub.decode("cwbkt"), "aeiou")

  key = "purplepineapple"
  sub = new KeywordCipher(abc, key)
  assert.strictEqual(sub.encode("abc"), "pur")
  assert.strictEqual(sub.encode("xyz"), "xyz")
  assert.strictEqual(sub.encode("aeiou"), "pebjt")
  assert.strictEqual(sub.decode("pur"), "abc")
  assert.strictEqual(sub.decode("xyz"), "xyz")
  assert.strictEqual(sub.decode("pebjt"), "aeiou")

  key = "etaoinshrdlucmfwypvbgkjqxz"
  sub = new KeywordCipher(abc, key)
  assert.strictEqual(sub.encode("abc"), "eta")
  assert.strictEqual(sub.encode("xyz"), "qxz")
  assert.strictEqual(sub.encode("aeiou"), "eirfg")
  assert.strictEqual(sub.decode("eta"), "abc")
  assert.strictEqual(sub.decode("qxz"), "xyz")
  assert.strictEqual(sub.decode("eirfg"), "aeiou")

  key = "tfozcivbsjhengarudlkpwqxmy"
  sub = new KeywordCipher(abc, key)
  assert.strictEqual(sub.encode("abc"), "tfo")
  assert.strictEqual(sub.decode("tfo"), "abc")
  assert.strictEqual(sub.encode("tjuukf"), "kjpphi")
  assert.strictEqual(sub.decode("kjpphi"), "tjuukf")
  assert.strictEqual(sub.decode("tjuukf"), "ajqqtb")
  assert.strictEqual(sub.encode("ajqqtb"), "tjuukf")

  assert.strictEqual(sub.encode("a_bc&*83"), "t_fo&*83")
  assert.strictEqual(sub.decode("t_fo*&83"), "a_bc*&83")

  abc = "qWeRtYuIoPaSdFgHjKlZxCvBnM"
  abc = randomize(abc.split("")).join("")
  key = randomize(abc.split("")).join("")

  sub = new KeywordCipher(abc, key)
  for (let i = 0; i < 8; i++) {
    let str = randomToken()
    let cmp = str
      .split("")
      .map(function (x) {
        let i = abc.indexOf(x)
        return i < 0 ? x : key[i]
      })
      .join("")
    assert.strictEqual(sub.encode(str), cmp)
    cmp = str
      .split("")
      .map(function (x) {
        let i = key.indexOf(x)
        return i < 0 ? x : abc[i]
      })
      .join("")
    assert.strictEqual(sub.decode(str), cmp)
  }
})
