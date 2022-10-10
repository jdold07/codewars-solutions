//+ ====================================================================================================================
//+
//+ 8 kyu - Sum Mixed Array  [ ID: 57eaeb9578748ff92a000009 ] (sum-mixed-array)
//+ URL: https://www.codewars.com/kata/57eaeb9578748ff92a000009
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { sumMix } from "./sumMixedArray"

describe("sumMix", () => {
  it("Example tests", () => {
    assert.equal(sumMix([9, 3, "7", "3"]), 22)
    assert.equal(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42)
    assert.equal(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41)
    assert.equal(sumMix(["1", "5", "8", 8, 9, 9, 2, "3"]), 45)
    assert.equal(sumMix([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7]), 61)
  })
  it("Random tests", () => {
    const randint = (a: number, b: number): number => ~~(Math.random() * (b - a + 1)) + a
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function mysumMix(x: any[]): number {
      return x.reduce((a, b) => a + Number(b), 0)
    }
    const names = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 1, 2, 3, 4, 5, 6, 7, 8, 9]

    for (let i = 0; i < 100; i++) {
      const x = []
      const len = randint(1, 30)
      for (let k = 0; k < len; k++) {
        x.push(names[randint(0, names.length - 1)])
      }
      assert.equal(sumMix(x), mysumMix(x), `sumMix(${x})`)
    }
  })
})
