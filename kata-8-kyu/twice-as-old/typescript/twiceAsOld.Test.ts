//+ ====================================================================================================================
//+
//+ 8 kyu - Twice as old  [ ID: 5b853229cfde412a470000d0 ] (twice-as-old)
//+ URL: https://www.codewars.com/kata/5b853229cfde412a470000d0
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { twiceAsOld } from "./twiceAsOld"

describe("Basic tests", () => {
  it("Testing for dad's age: 36 and son's age: 7", () => {
    assert.strictEqual(twiceAsOld(36, 7), 22)
  })

  it("Testing for dad's age: 55 and son's age: 30", () => {
    assert.strictEqual(twiceAsOld(55, 30), 5)
  })

  it("Testing for dad's age: 42 and son's age: 21", () => {
    assert.strictEqual(twiceAsOld(42, 21), 0)
  })

  it("Testing for dad's age: 22 and son's age: 1", () => {
    assert.strictEqual(twiceAsOld(22, 1), 20)
  })

  it("Testing for dad's age: 29 and son's age: 0", () => {
    assert.strictEqual(twiceAsOld(29, 0), 29)
  })

  it("Random tests", () => {
    function randInt(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function twiceAsOldSolution(dadYearsOld: number, sonYearsOld: number): number {
      return Math.abs(dadYearsOld - 2 * sonYearsOld)
    }

    for (let i = 0; i < 50; i++) {
      const dad = randInt(18, 100)
      const son = Math.max(0, dad - randInt(18, 40))
      assert.strictEqual(
        twiceAsOld(dad, son),
        twiceAsOldSolution(dad, son),
        "Testing for dad's age: " + dad + " and son's age: " + son
      )
    }
  })
})
