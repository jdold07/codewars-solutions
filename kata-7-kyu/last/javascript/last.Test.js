//+ ====================================================================================================================
//+
//+ 7 kyu - Last  [ ID: 541629460b198da04e000bb9 ] (last)
//+ URL: https://www.codewars.com/kata/541629460b198da04e000bb9
//+ Category: REFERENCE  |  Tags: LISTS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { last } = require("./last")

describe("last (...)", function () {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let str = "abckxyz"
  const ch$ = str.split("")

  it("should return...", function () {
    assert.strictEqual(last(arr), 10, "... last item of an array")
    assert.strictEqual(last(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), 10, "... last argument")
    assert.strictEqual(last(ch$), "z", "... last item of an array")
    assert.strictEqual(last(str), "z", "... last char of a string")
    assert.strictEqual(last("a", "b", "c", "z"), "z", "... last argument")
    assert.strictEqual(last(5), 5, "... only argument")
  })
})

describe("Testing random inputs", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let str = "abckxyz"
  const ch$ = str.split("")

  const rnd = function (l) {
    return l[~~(Math.random() * (l.length - 1))]
  }

  const lasta = rnd(arr)
  const lasts = rnd(str)
  const lastc = rnd(ch$)
  const lastarg = rnd([lasta, lastc, lasts, true])
  arr.push(lasta)
  ch$.push(lastc)
  str += lasts

  it("With *randomized* lists, wait for...", function () {
    assert.strictEqual(last(arr), lasta, "... last item of an array")
    assert.strictEqual(last(ch$), lastc, "... last item of an array")
    assert.strictEqual(last(str), lasts, "... last char of a string")
    assert.strictEqual(last("a", "b", "c", lastarg), lastarg, "... last argument")
  })
})
