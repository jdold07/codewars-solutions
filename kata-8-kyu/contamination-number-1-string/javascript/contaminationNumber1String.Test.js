//+ ====================================================================================================================
//+
//+ 8 kyu - Contamination #1 -String-  [ ID: 596fba44963025c878000039 ] (contamination-number-1-string)
//+ URL: https://www.codewars.com/kata/596fba44963025c878000039
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { contamination } = require("./contaminationNumber1String")

it("Basic tests", () => {
  assert.strictEqual(contamination("abc", "z"), "zzz")
  assert.strictEqual(contamination("", "z"), "", "Empty text")
  assert.strictEqual(contamination("abc", ""), "", "Empty char")
  assert.strictEqual(contamination("_3ebzgh4", "&"), "&&&&&&&&")
  assert.strictEqual(contamination("//case", " "), "      ")
})

it("Random tests", () => {
  let rnd = () => ~~(Math.random() * 96) + 32,
    rndChr = () => String.fromCharCode(rnd())

  for (let i = 0; i < 100; i++) {
    let chr = rndChr(),
      exp = chr.repeat(rnd() >> 1),
      txt = [...exp].map(rndChr).join``
    if (rnd() < 50) exp = chr < "a" ? (chr = "") : (txt = "")
    assert.strictEqual(contamination(txt, chr), exp)
  }
})
