//+ ====================================================================================================================
//+
//+ 6 kyu - Condi cipher  [ ID: 59bf6b73bf10a4c8e5000047 ] (condi-cipher)
//+ URL: https://www.codewars.com/kata/59bf6b73bf10a4c8e5000047
//+ Category: ALGORITHMS  |  Tags: CIPHERS | STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { encode, decode } = require("./condiCipher")

describe("Condi", function () {
  it("Basic Condi", function () {
    assert.strictEqual(encode("on", "cryptogam", 10), "jx")
    assert.strictEqual(decode("jx", "cryptogam", 10), "on")
    assert.strictEqual(decode("....", "cryptogam", 10), "....")
    assert.strictEqual(encode("cryptogram", "cryptogam", 0), "cytgmdfmbk")
    assert.strictEqual(decode("abc", "keykeykeykey", 10), "sit")
    assert.strictEqual(decode(",abc", "keykeykeykey", 10), ",sit")
    assert.strictEqual(encode("on the first day i got lost.", "cryptogam", 10), "jx wnz xrkvz jnd l ufd vwcz.")
    assert.strictEqual(decode("jx wnz xrkvz jnd l ufd vwcz.", "cryptogam", 10), "on the first day i got lost.")
    assert.strictEqual(encode("i will never eat any grapes again", "superkey", 4), "n ggka cvssb bfe esz omgdyr bqqva")
    assert.strictEqual(decode("n ggka cvssb bfe esz omgdyr bqqva", "superkey", 30), "i will never eat any grapes again")
    assert.strictEqual(
      decode("qvf cmnxmdkjfca.p,ab mf,byokf vjhwpcyb", "nqhbfgmi", 28),
      "zva nguhbmmgydx.s,ok se,rmafz vpedgbua"
    )
  })

  it("Random Condi - decode", function () {
    let loop = 0
    while (loop++ < 50) {
      let str = __makeStr()
      let key = __makeKey()
      let result = __decode(str, key, loop % 30)
      console.log(`\nMessage: ${str}, Key:${key} InitShift:${loop % 30} \nExpected result: ${result}`)
      assert.strictEqual(decode(str, key, loop % 30), result)
    }
  })

  it("Random Condi - encode", function () {
    let loop = 0
    while (loop++ < 50) {
      let str = __makeStr()
      let key = __makeKey()
      let result = __encode(str, key, loop % 30)
      console.log(`\nMessage: ${str}, Key:${key} InitShift:${loop % 30} \nExpected result: ${result}`)
      assert.strictEqual(encode(str, key, loop % 30), result)
    }
  })
})

function __encode(message, key, initShift) {
  let code =
    key
      .split("")
      .filter((e, i) => key.indexOf(e) == i)
      .join("") +
    "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .filter((e) => !key.includes(e))
      .join("")
  let mov = (initShift - 1) % 26
  let res = ""
  for (let i = 0; i < message.length; i++) {
    res += code.includes(message[i]) ? code[(code.indexOf(message[i]) + mov + 1) % 26] : message[i]
    mov = code.includes(message[i]) ? code.indexOf(message[i]) : mov
  }
  return res
}

function __decode(message, key, initShift) {
  let code =
    key
      .split("")
      .filter((e, i) => key.indexOf(e) == i)
      .join("") +
    "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .filter((e) => !key.includes(e))
      .join("")
  let mov = (initShift - 1) % 26
  let res = ""
  for (let i = 0; i < message.length; i++) {
    res += code.includes(message[i]) ? code[(26 + code.indexOf(message[i]) - mov - 1) % 26] : message[i]
    mov = code.includes(message[i]) ? code.indexOf(res[res.length - 1]) : mov
  }
  return res
}

function __makeStr() {
  let text = ""
  let possible = "abcdefghijklmnop qrstuvwxyz.,"

  for (let i = 0; i < Math.round(Math.random() * 200) + 1; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}

function __makeKey() {
  let text = ""
  let possible = "abcdefghijklmnopqrstuvwxyz"

  for (let i = 0; i < Math.round(Math.random() * 20) + 2; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}
