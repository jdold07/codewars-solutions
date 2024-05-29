//+ ====================================================================================================================
//+
//+ 7 kyu - Return String of First Characters  [ ID: 5639bdcef2f9b06ce800005b ] (return-string-of-first-characters)
//+ URL: https://www.codewars.com/kata/5639bdcef2f9b06ce800005b
//+ Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomize } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { makeString } = require("./returnStringOfFirstCharacters")

it("makeString should work for some examples", () => {
  assert.strictEqual(makeString("sees eyes xray yoat"), "sexy", "Wrong result for 'sees eyes xray yoat'")
  assert.strictEqual(makeString("brown eyes are nice"), "bean", "Wrong result for 'brown eyes are nice'")
  assert.strictEqual(makeString("cars are very nice"), "cavn", "Wrong result for 'cars are very nice'")
  assert.strictEqual(makeString("kaks de gan has a big head"), "kdghabh", "Wrong result for 'kaks de gan has a big head'")
})

it("should work for random input", () => {
  let rnd = (x) => ~~(Math.random() * x),
    chrs = "abcdefghijklmnopqrstuvwxyz"

  chrs = randomize((chrs + chrs.toUpperCase()).split(""))

  let rndWord = (len) => {
    let i = rnd(26)
    return randomize(chrs.slice(i, i + len)).join("")
  }

  for (let t = 0; t < 40; t++) {
    let solution = rndWord(4 + rnd(5)),
      input = solution
        .split("")
        .map((c) => c + rndWord(3 + rnd(5)))
        .join(" ")
    assert.strictEqual(makeString(input), solution, `Wrong result for ${input}`)
  }
})
