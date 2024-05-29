//+ ====================================================================================================================
//+
//+ 6 kyu - Persistent Bugger.  [ ID: 55bf01e5a717a0d57e0000ec ] (persistent-bugger)
//+ URL: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { persistence } from "./persistentBugger"

describe("Persistent Bugger.", () => {
  it("Fixed tests", () => {
    assert.strictEqual(persistence(39), 3)
    assert.strictEqual(persistence(4), 0)
    assert.strictEqual(persistence(25), 2)
    assert.strictEqual(persistence(999), 4)
  })

  it("Random tests", () => {
    function sol(num: number) {
      let c: number = num > 9 ? 1 : 0
      while ((num = (num + "").split("").reduce((mul, cv) => mul * +cv, 1)) > 9) ++c
      return c
    }

    function rand(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    for (let i = 0; i < 100; i++) {
      const n = rand(1, 10000000)
      assert.strictEqual(persistence(n), sol(n), `Testing for num = ${n}`)
    }
  })
})
