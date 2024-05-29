//+ ====================================================================================================================
//+
//+ 7 kyu - Printer Errors  [ ID: 56541980fa08ab47a0000040 ] (printer-errors)
//+ URL: https://www.codewars.com/kata/56541980fa08ab47a0000040
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { printerError } = require("./printerErrors")

describe("printerError", function () {
  it("Basic tests", function () {
    let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    assert.strictEqual(printerError(s), "3/56")
    s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    assert.strictEqual(printerError(s), "6/60")
    s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu"
    assert.strictEqual(printerError(s), "11/65")
    s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmm"
    assert.strictEqual(printerError(s), "0/53")
  })
})

describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }
  function do_ex() {
    let i = 0,
      res = ""
    let k = randint(10, 500)
    while (i < (~~3 * k) / 2) {
      let n = randint(97, 109)
      res += String.fromCharCode(n)
      i++
    }
    while (i < 2 * k) {
      let n
      if (i % 17 === 0) {
        n = randint(110, 122)
      } else {
        n = randint(97, 109)
      }
      res += String.fromCharCode(n)
      i++
    }
    return res
  }
  //................
  function printerErrorSol(s) {
    let cnt = 0,
      l = s.length
    for (let i = 0; i < l; i++) {
      let c = s.charCodeAt(i)
      if (c > 109 && c <= 122) cnt++
    }
    return +cnt + "/" + l
  }
  //................

  for (let i = 0; i < 200; i++) {
    let s = do_ex()
    it("Testing printerError: ", function () {
      assert.strictEqual(printerError(s), printerErrorSol(s))
    })
  }
})
