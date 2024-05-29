//+ ====================================================================================================================
//+
//+ 6 kyu - Roman Numerals Encoder  [ ID: 51b62bf6a9c58071c600001b ] (roman-numerals-encoder)
//+ URL: https://www.codewars.com/kata/51b62bf6a9c58071c600001b
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { solution } = require("./romanNumeralsEncoder")

describe("solution", function () {
  it("should handle small numbers", function () {
    assert.strictEqual(solution(1), "I", '1 should return "I"')
    assert.strictEqual(solution(2), "II", '2 should return "II"')
    assert.strictEqual(solution(3), "III", '3 should return "III"')
    assert.strictEqual(solution(4), "IV", '4 should return "IV"')
    assert.strictEqual(solution(5), "V", '5 should return "V"')
    assert.strictEqual(solution(9), "IX", '9 should return "IX"')
    assert.strictEqual(solution(10), "X", '10 should return "X"')
    assert.strictEqual(solution(11), "XI", '11 should return "XI"')
    assert.strictEqual(solution(19), "XIX", '19 should return "XIX"')
    assert.strictEqual(solution(22), "XXII", '22 should return "XXII"')
    assert.strictEqual(solution(15), "XV", '15 should return "XV"')
  })

  it("should handle large numbers", function () {
    assert.strictEqual(solution(1000), "M", '1000 should return "M"')
    assert.strictEqual(solution(1001), "MI", '1001 should return "MI"')
    assert.strictEqual(solution(1990), "MCMXC", '1990 should return "MCMXC"')
    assert.strictEqual(solution(2007), "MMVII", '2007 should return "MMVII"')
    assert.strictEqual(solution(2008), "MMVIII", '2008 should return "MMVIII"')
  })

  it("random tests", function () {
    let Roman = {
      map: [
        1000,
        "M",
        900,
        "CM",
        500,
        "D",
        400,
        "CD",
        100,
        "C",
        90,
        "XC",
        50,
        "L",
        40,
        "XL",
        10,
        "X",
        9,
        "IX",
        5,
        "V",
        4,
        "IV",
        1,
        "I"
      ],
      toRoman: function (n) {
        let value = ""
        for (let idx = 0; n > 0 && idx < this.map.length; idx += 2) {
          while (n >= this.map[idx]) {
            value += this.map[idx + 1]
            n -= this.map[idx]
          }
        }
        return value
      }
    }

    for (let i = 0; i < 100; i++) {
      let n = (1 + Math.random() * 3888) | 0
      const exp = Roman.toRoman(n)
      assert.strictEqual(solution(n), exp, `${n} should return "${exp}"`)
    }
  })
})
