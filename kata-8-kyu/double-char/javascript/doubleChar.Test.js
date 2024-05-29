//+ ====================================================================================================================
//+
//+ 8 kyu - Double Char  [ ID: 56b1f01c247c01db92000076 ] (double-char)
//+ URL: https://www.codewars.com/kata/56b1f01c247c01db92000076
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { doubleChar } = require("./doubleChar")

describe("doubleChar", function () {
  it("works for some examples", function () {
    assert.strictEqual(doubleChar("abcd"), "aabbccdd")
    assert.strictEqual(doubleChar("Adidas"), "AAddiiddaass")
    assert.strictEqual(doubleChar("1337"), "11333377")
    assert.strictEqual(doubleChar("illuminati"), "iilllluummiinnaattii")
    assert.strictEqual(doubleChar("123456"), "112233445566")
    assert.strictEqual(doubleChar("%^&*("), "%%^^&&**((")
  })

  it("works for random strings", function () {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a
    const randstr = (l) => [...Array(l)].map(() => String.fromCharCode(randint(65, 127))).join("")

    const solution = (str) =>
      str
        .split("")
        .map((c) => c + c)
        .join("")

    for (let i = 0; i < 40; ++i) {
      let str = randstr(randint(5, 20))
      assert.strictEqual(doubleChar(str), solution(str), `Failed when str='${str}'`)
    }
  })
})
