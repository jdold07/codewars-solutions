//+ ====================================================================================================================
//+
//+ 7 kyu - Count the divisors of a number  [ ID: 542c0f198e077084c0000c2e ] (count-the-divisors-of-a-number)
//+ URL: https://www.codewars.com/kata/542c0f198e077084c0000c2e
//+ Category: REFERENCE  |  Tags: NUMBER THEORY | MATHEMATICS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { divisors } from "./countTheDivisorsOfANumber"

describe("basic tests", function () {
  it("Testing for 1", () => assert.strictEqual(divisors(1), 1))
  it("Testing for 10", () => assert.strictEqual(divisors(10), 4))
  it("Testing for 11", () => assert.strictEqual(divisors(11), 2))
  it("Testing for 54", () => assert.strictEqual(divisors(54), 8))
  it("Testing for 25", () => assert.strictEqual(divisors(25), 3))
  it("Testing for 64", () => assert.strictEqual(divisors(64), 7))
})

describe("Random tests", function () {
  const sol = (n: number) =>
    Array.from({ length: n }, (_, i) => i + 1).filter((x) => n % x === 0).length

  for (let i = 0; i < 100; i++) {
    const n = Math.floor(Math.random() * 1000) + 1
    it(`Testing for ${n}`, () => assert.strictEqual(divisors(n), sol(n)))
  }
})
