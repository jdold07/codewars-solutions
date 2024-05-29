//+ ====================================================================================================================
//+
//+ 6 kyu - IP Validation  [ ID: 515decfd9dcfc23bb6000006 ] (ip-validation)
//+ URL: https://www.codewars.com/kata/515decfd9dcfc23bb6000006
//+ Category: ALGORITHMS  |  Tags: REGULAR EXPRESSIONS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { isValidIP } = require("./ipValidation")

it("Basic Tests", () => {
  assert.strictEqual(isValidIP(""), false)
  assert.strictEqual(isValidIP("abc.def.ghi.jkl"), false)
  assert.strictEqual(isValidIP("123.456.789.0"), false)
  assert.strictEqual(isValidIP("12.34.56"), false)
  assert.strictEqual(isValidIP("01.02.03.04"), false)
  assert.strictEqual(isValidIP("256.1.2.3"), false)
  assert.strictEqual(isValidIP("1.2.3.4.5"), false)
  assert.strictEqual(isValidIP("123,45,67,89"), false)
  assert.strictEqual(isValidIP("1e0.1e1.1e2.2e2"), false)
  assert.strictEqual(isValidIP(" 1.2.3.4"), false)
  assert.strictEqual(isValidIP("1.2.3.4 "), false)
  assert.strictEqual(isValidIP("12.34.56.-7"), false)
  assert.strictEqual(isValidIP("1.2.3.4\n"), false)
  assert.strictEqual(isValidIP("\n1.2.3.4"), false)

  assert.strictEqual(isValidIP("0.0.0.0"), true)
  assert.strictEqual(isValidIP("123.45.67.89"), true)
  assert.strictEqual(isValidIP("255.255.255.255"), true)
  assert.strictEqual(isValidIP("1.2.3.4"), true)
  assert.strictEqual(isValidIP("31.41.59.26"), true)
  assert.strictEqual(isValidIP("53.58.97.93"), true)
  assert.strictEqual(isValidIP("238.46.26.43"), true)
  assert.strictEqual(isValidIP("38.32.79.50"), true)
  assert.strictEqual(isValidIP("28.84.197.169"), true)
  assert.strictEqual(isValidIP("39.93.75.105"), true)
  assert.strictEqual(isValidIP("82.0.97.49"), true)
  assert.strictEqual(isValidIP("44.59.230.78"), true)
  assert.strictEqual(isValidIP("164.0.62.86"), true)
  assert.strictEqual(isValidIP("208.99.86.28"), true)
  assert.strictEqual(isValidIP("0.34.82.53"), true)
  assert.strictEqual(isValidIP("42.117.0.67"), true)
  assert.strictEqual(isValidIP("98.214.80.86"), true)
  assert.strictEqual(isValidIP("51.32.82.30"), true)
  assert.strictEqual(isValidIP("66.47.0.93"), true)
  assert.strictEqual(isValidIP("84.46.0.95"), true)
  assert.strictEqual(isValidIP("50.58.22.31"), true)
  assert.strictEqual(isValidIP("72.53.59.40"), true)
  assert.strictEqual(isValidIP("81.28.48.1"), true)
})

it("Random tests", () => {
  let letters = "abcdefghijklm"
  let rnd = function (n) {
    return (Math.random() * n) | 0
  }

  for (let test = 0; test < 300; ++test) {
    let parts = []
    for (let i = 0; i < 4; ++i) parts.push("" + rnd(256))

    let pos = rnd(4)
    let i = rnd(4)
    let someLetters = letters.substring(i, i + rnd(2) + 1)
    let valid = false
    let route = rnd(12)
    switch (route) {
      case 0:
        valid = true
        break
      case 1:
        parts[pos] = ""
        break
      case 2:
        parts[pos] = someLetters
        break
      case 3:
        parts[pos] = rnd(44) + 256
        break
      case 4:
        parts.splice(pos, 1)
        break
      case 5:
        parts.push("" + rnd(256))
        break
      case 6:
        parts[0] = someLetters + parts[0]
        break
      case 7:
        parts[3] += someLetters
        break
      case 8:
        parts[rnd(2) + 1] += " "
        break
      case 9:
        parts[pos] = "-" + parts[pos]
        break
      case 10:
        parts[pos] = "0" + rnd(100)
        break
      case 11:
        parts[pos] = "00"
        break
    }

    let ip = parts.join(".")
    assert.strictEqual(!!isValidIP(ip), valid, "Teste IP: " + ip)
  }
})
