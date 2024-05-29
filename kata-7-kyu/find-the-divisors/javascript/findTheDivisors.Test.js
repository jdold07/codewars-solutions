//+ ====================================================================================================================
//+
//+ 7 kyu - Find the divisors!   [ ID: 544aed4c4a30184e960010f4 ] (find-the-divisors)
//+ URL: https://www.codewars.com/kata/544aed4c4a30184e960010f4
//+ Category: ALGORITHMS  |  Tags: MATHEMATICS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { divisors } = require("./findTheDivisors")

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(divisors(15), [3, 5], "The array is not what was expected")
    assert.deepEqual(divisors(253), [11, 23], "The array is not what was expected")
    assert.deepEqual(divisors(24), [2, 3, 4, 6, 8, 12], "The array is not what was expected")

    assert.deepEqual(divisors(13), "13 is prime", "The array is not what was expected")
    assert.deepEqual(divisors(3), "3 is prime", "The array is not what was expected")
    assert.deepEqual(divisors(29), "29 is prime", "The array is not what was expected")

    function divisors1(i) {
      let div = []

      for (let j = 2; j <= i / 2; j++) {
        let k = i % j

        if (k === 0) {
          div[div.length] = j
        }
      }

      if (div.length === 0) {
        return i.toString() + " is prime"
      } else {
        return div
      }
    }

    let a = Math.floor(Math.random() * 100 + 2)
    let b = Math.floor(Math.random() * 100 + 2)
    let c = Math.floor(Math.random() * 100 + 2)

    assert.deepEqual(divisors(a), divisors1(a))
    assert.deepEqual(divisors(b), divisors1(b))
    assert.deepEqual(divisors(c), divisors1(c))
  })
})
