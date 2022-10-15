//+ ====================================================================================================================
//+
//+ 6 kyu - Sum of Digits / Digital Root  [ ID: 541c8630095125aba6000c00 ] (sum-of-digits-slash-digital-root)
//+ URL: https://www.codewars.com/kata/541c8630095125aba6000c00
//+ Category: ALGORITHMS  |  Tags: MATHEMATICS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { digitalRoot } from "./sumOfDigitsSlashDigitalRoot"

describe("solution", () => {
  it("should work for fixed tests", () => {
    assert.equal(digitalRoot(16), 7)
    assert.equal(digitalRoot(195), 6)
    assert.equal(digitalRoot(992), 2)
    assert.equal(digitalRoot(999999999999), 9)
    assert.equal(digitalRoot(167346), 9)
    assert.equal(digitalRoot(10), 1)
    assert.equal(digitalRoot(0), 0)
    assert.equal(digitalRoot(200), 2)
  })

  it("should work for random tests", () => {
    const myDigitalRoot = (n: number): number => {
      return n < 10 ? n : myDigitalRoot([...n.toString()].map(Number).reduce((acc, cur) => acc + cur, 0))
    }

    const generateRandom = (): number[] => {
      const biggestNumber = 999999999999
      const arrOfRandom: number[] = Array.from({ length: 10 }, () => Math.random())
      return arrOfRandom.map((n) => Math.floor(n * biggestNumber))
    }

    generateRandom().forEach((n) => {
      assert.equal(digitalRoot(n), myDigitalRoot(n), `Testing for n = ${n}`)
    })
  })
})
