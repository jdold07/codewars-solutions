//+ ====================================================================================================================
//+
//+ 7 kyu - Highest and Lowest  [ ID: 554b4ac871d6813a03000035 ] (highest-and-lowest)
//+ URL: https://www.codewars.com/kata/554b4ac871d6813a03000035
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { Kata } from "./highestAndLowest"

describe("Fixed Tests", function () {
  it("Some Test", function () {
    assert.strictEqual(Kata.highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214")
  })
  it("Sort Test", function () {
    assert.strictEqual(Kata.highAndLow("10 2 -1 -20"), "10 -20")
  })
  it("Plus Minus Test", function () {
    assert.strictEqual(Kata.highAndLow("1 -1"), "1 -1")
  })
  it("Plus Plus Test", function () {
    assert.strictEqual(Kata.highAndLow("1 1"), "1 1")
  })
  it("Minus Minus Test", function () {
    assert.strictEqual(Kata.highAndLow("-1 -1"), "-1 -1")
  })
  it("Plus Minus Zero Test", function () {
    assert.strictEqual(Kata.highAndLow("1 -1 0"), "1 -1")
  })
  it("Plus Plus Zero Test", function () {
    assert.strictEqual(Kata.highAndLow("1 1 0"), "1 0")
  })
  it("Minus Minus Zero Test", function () {
    assert.strictEqual(Kata.highAndLow("-1 -1 0"), "0 -1")
  })
  it("Single Test", function () {
    assert.strictEqual(Kata.highAndLow("42"), "42 42")
  })
})
describe("Random Tests", function () {
  it("Random Tests", function () {
    let t = 100
    const rnd = Math.random
    while (t--) {
      const min: number = ~~(rnd() * 1e4) - 5e3
      const max: number = min + 3e3 + ~~(rnd() * 100)
      let rr: number[] = []
      const exp: string = max + " " + min
      for (let i = 1; i < 20; i++) rr.push(min + ~~(rnd() * 3e3))

      rr = rr.slice(10).concat([min, max]).concat(rr.slice(0, 10))
      const rs: string = rr
        .sort(function () {
          return rnd() < 0.5 ? 1 : -1
        })
        .join(" ")
      assert.strictEqual(Kata.highAndLow(rs), exp)
    }
  })
})
