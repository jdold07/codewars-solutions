//+ ====================================================================================================================
//+
//+ 7 kyu - L2: Triple X  [ ID: 568dc69683322417eb00002c ] (l2-triple-x)
//+ URL: https://www.codewars.com/kata/568dc69683322417eb00002c
//+ Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { tripleX } = require("./l2TripleX")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(tripleX("abraxxxas"), true)
    assert.strictEqual(tripleX("xoxotrololololololoxxx"), false)
    assert.strictEqual(tripleX("soft kitty, warm kitty, xxxxx"), true)
    assert.strictEqual(tripleX("softx kitty, warm kitty, xxxxx"), false)

    assert.strictEqual(tripleX("Xabraxxxas"), true)
    assert.strictEqual(tripleX("xoXotrololololololoxxx"), false)
    assert.strictEqual(tripleX("softXxxx kitty, warm kitty, xxxxx"), true)
    assert.strictEqual(tripleX("softxXxxx kitty, warm kitty, xxxxx"), false)
  })

  it("Random Tests:", () => {
    function solution(str) {
      return str.match(/^[^x]*xxx.*$/) ? true : false
    }

    let chars = ["xxx", "x", "X", "soft", "kitty", "warm", "kitty"]

    for (let j = 0; j < 50; j++) {
      let s = ""
      for (let i = 0; i < 4; i++) s += chars[~~(Math.random() * 7)]
      assert.strictEqual(tripleX(s), solution(s), `Testing for str = ${JSON.stringify(s)}`)
    }
  })
})
