/* eslint-disable @typescript-eslint/no-explicit-any */
//+ ====================================================================================================================
//+
//+ 8 kyu - Type of sum  [ ID: 5a2e9ae2b6cfd7692a0000ba ] (type-of-sum)
//+ URL: https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "chai"
import { typeOfSum } from "./typeOfSum"

describe("Basic tests", () => {
  it("test", function () {
    assert.equal(typeOfSum(12, 1), "number")
    assert.equal(typeOfSum("d", 1), "string")
    assert.equal(typeOfSum(1, "a"), "string")
    assert.equal(typeOfSum("dd", ""), "string")
    assert.equal(typeOfSum(true, 1), "number")
    assert.equal(typeOfSum("s", false), "string")
    assert.equal(typeOfSum(null, 1), "number")
    assert.equal(typeOfSum("s", null), "string")
    assert.equal(typeOfSum(null, undefined), "number")
    assert.equal(typeOfSum(undefined, "re"), "string")
    assert.equal(typeOfSum(undefined, true), "number")
    assert.equal(typeOfSum(null, false), "number")
  })
})

describe("Random Tests", () => {
  const randomInteger = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1) + a)

  const check = (a: any, b: any) => typeof (a + b)
  const answers = [0, 1, "a", "b", null, undefined, true, false]
  // const index = randomInteger(0, 7)

  for (let i = 1; i <= 88; i++) {
    const index1 = randomInteger(0, 7)
    const index2 = randomInteger(0, 7)

    const a = answers[index1]
    const b = answers[index2]

    it(`Testing №${i} for typeOfSum(${a}, ${b})`, () => {
      assert.equal(typeOfSum(a, b), check(a, b), `It should work for random tests too`)
    })
  }
})
