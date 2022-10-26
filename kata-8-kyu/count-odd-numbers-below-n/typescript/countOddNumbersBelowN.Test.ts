//+ ====================================================================================================================
//+
//+ 8 kyu - Count Odd Numbers below n  [ ID: 59342039eb450e39970000a6 ] (count-odd-numbers-below-n)
//+ URL: https://www.codewars.com/kata/59342039eb450e39970000a6
//+ Category: GAMES  |  Tags: PERFORMANCE | MATHEMATICS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { oddCount } from "./countOddNumbersBelowN"

describe("Test Cases", function () {
  it("should work for random cases", () => {
    for (let i = 1; i <= 200; i += 1) {
      const n = Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER)

      const usoln = oddCount(n),
        soln = Math.floor(n / 2)

      assert.equal(usoln, soln)
    }
  })
})
