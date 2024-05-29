//+ ====================================================================================================================
//+
//+ 7 kyu - nth Floyd line  [ ID: 5b096efeaf15bef812000010 ] (nth-floyd-line)
//+ URL: https://www.codewars.com/kata/5b096efeaf15bef812000010
//+ Category: REFERENCE  |  Tags: MATHEMATICS | PUZZLES | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { nthFloyd } = require("./nthFloydLine")

const _ = require("lodash")

it("Basic tests", function () {
  assert.strictEqual(nthFloyd(15), 5)
  assert.strictEqual(nthFloyd(26), 7)
  assert.strictEqual(nthFloyd(17), 6)
  assert.strictEqual(nthFloyd(24), 7)
  assert.strictEqual(nthFloyd(19), 6)
  assert.strictEqual(nthFloyd(5), 3)
  assert.strictEqual(nthFloyd(212), 21)
  assert.strictEqual(nthFloyd(499502), 1000)
})

it("Random tests", function () {
  for (let i = 0; i < 100; i++) {
    let r = _.random(1, Math.pow(10, 5))
    let exp = kj6tr(r)
    assert.strictEqual(nthFloyd(r), exp)
    r = _.random(Math.pow(10, 5), Math.pow(10, 9))
    exp = kj6tr(r)
    assert.strictEqual(nthFloyd(r), exp)
  }
})

function kj6tr(n) {
  return Math.floor(((1 + 8 * (n - 1)) ** 0.5 + 1) / 2)
}
