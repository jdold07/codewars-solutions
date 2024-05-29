//+ ====================================================================================================================
//+
//+ 7 kyu - Find the stray number  [ ID: 57f609022f4d534f05000024 ] (find-the-stray-number)
//+ URL: https://www.codewars.com/kata/57f609022f4d534f05000024
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { stray } = require("./findTheStrayNumber")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(stray([1, 1, 2]), 2)

    assert.strictEqual(stray([17, 17, 3, 17, 17, 17, 17]), 3)

    assert.strictEqual(stray([8, 1, 1, 1, 1, 1, 1]), 8)

    assert.strictEqual(stray([1, 1, 1, 1, 1, 1, 0]), 0)

    assert.strictEqual(stray([0, 0, 0, 7, 0, 0, 0]), 7)

    assert.strictEqual(stray([-21, -21, -21, -21, -6, -21, -21]), -6)

    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    }

    function validRandomArray(size, strayNumber) {
      let array = Array(size).fill(randomInt(-10000, 10000))
      array[randomInt(0, size)] = strayNumber
      return array
    }

    let strayNumber
    for (let i = 0; i < 50; i++) {
      strayNumber = randomInt(-10000, 10000)
      let arr = validRandomArray(101, strayNumber)
      assert.strictEqual(stray(arr), strayNumber)

      strayNumber = randomInt(-10000, 10000)
      arr = validRandomArray(15273, strayNumber)
      assert.strictEqual(stray(arr), strayNumber)
    }
  })
})
