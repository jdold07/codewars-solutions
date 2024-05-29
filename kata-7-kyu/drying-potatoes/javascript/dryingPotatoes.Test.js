//+ ====================================================================================================================
//+
//+ 7 kyu - Drying Potatoes  [ ID: 58ce8725c835848ad6000007 ] (drying-potatoes)
//+ URL: https://www.codewars.com/kata/58ce8725c835848ad6000007
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | PUZZLES
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { potatoes } = require("./dryingPotatoes")

describe("Basic tests", function () {
  it("potatoes", function () {
    assert.strictEqual(potatoes(82, 127, 80), 114)
    assert.strictEqual(potatoes(93, 129, 91), 100)
    assert.strictEqual(potatoes(82, 134, 77), 104)
    assert.strictEqual(potatoes(90, 194, 87), 149)
    assert.strictEqual(potatoes(82, 173, 77), 135)
    assert.strictEqual(potatoes(77, 227, 74), 200)
    assert.strictEqual(potatoes(76, 64, 75), 61)
    assert.strictEqual(potatoes(81, 120, 79), 108)
    assert.strictEqual(potatoes(84, 65, 80), 52)
    assert.strictEqual(potatoes(93, 69, 89), 43)
    assert.strictEqual(potatoes(78, 121, 75), 106)
    assert.strictEqual(potatoes(83, 185, 79), 149)
    assert.strictEqual(potatoes(78, 57, 76), 52)
    assert.strictEqual(potatoes(79, 132, 78), 126)
    assert.strictEqual(potatoes(86, 195, 84), 170)
    assert.strictEqual(potatoes(75, 96, 70), 80)
    assert.strictEqual(potatoes(81, 150, 77), 123)
    assert.strictEqual(potatoes(82, 57, 81), 54)
    assert.strictEqual(potatoes(85, 58, 83), 51)
    assert.strictEqual(potatoes(78, 173, 77), 165)
  })
})

describe("Random tests", function () {
  it("Should work with random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }
  //................
  function potatoesKNZ(p0, w0, p1) {
    return ~~((w0 * (100.0 - p0)) / (100.0 - p1))
  }
  //.................
  console.log("**** Random Tests potatoes")
  function tests_code() {
    let i = 0
    while (i < 50) {
      let p0 = randint(75, 99)
      let w0 = randint(50, 250)
      let p1 = p0 - randint(1, 5)
      let sol = potatoesKNZ(p0, w0, p1)
      assert.strictEqual(potatoes(p0, w0, p1), sol)
      i++
    }
  }
  tests_code()
})
})