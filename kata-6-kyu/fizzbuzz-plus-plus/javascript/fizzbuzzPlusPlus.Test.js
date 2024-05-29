//+ ====================================================================================================================
//+
//+ 6 kyu - FizzBuzz++  [ ID: 596925532f709fccf3000077 ] (fizzbuzz-plus-plus)
//+ URL: https://www.codewars.com/kata/596925532f709fccf3000077
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { fizzbuzzPlusPlus } = require("./fizzbuzzPlusPlus")

function ans(numbers, words) {
  const l = numbers.reduce((a, b) => a * b, 1)
  return [...Array(l).keys()].map((x) => words.filter((_, i) => (x + 1) % numbers[i] == 0).join("") || x + 1)
}
function randrange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const primes = [2, 3, 5, 7, 11, 13, 17, 19]

describe("Regular FizzBuzz", function () {
  it("Should return the definition of fizzbuzz", function () {
    assert.deepEqual(fizzbuzzPlusPlus([3, 5], ["fizz", "buzz"]), [
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz"
    ])
  })
})

describe("FizzBuzz++", function () {
  it("Should return the definition of fizzbuzz++", function () {
    assert.deepEqual(fizzbuzzPlusPlus([2, 3, 5], ["fizz", "buzz", "bazz"]), [
      1,
      "fizz",
      "buzz",
      "fizz",
      "bazz",
      "fizzbuzz",
      7,
      "fizz",
      "buzz",
      "fizzbazz",
      11,
      "fizzbuzz",
      13,
      "fizz",
      "buzzbazz",
      "fizz",
      17,
      "fizzbuzz",
      19,
      "fizzbazz",
      "buzz",
      "fizz",
      23,
      "fizzbuzz",
      "bazz",
      "fizz",
      "buzz",
      "fizz",
      29,
      "fizzbuzzbazz"
    ])
  })

  it("Should work for any coprimes", function () {
    assert.deepEqual(fizzbuzzPlusPlus([2, 7, 15], ["a", "b", "c"]), ans([2, 7, 15], ["a", "b", "c"]))
  })

  it("Should work for duplicate words", function () {
    assert.deepEqual(fizzbuzzPlusPlus([2, 7, 15], ["a", "a", "c"]), ans([2, 7, 15], ["a", "a", "c"]))
  })

  it("Should be efficient", function () {
    assert.deepEqual(fizzbuzzPlusPlus([2, 3, 7, 19], ["a", "b", "c", "d"]), ans([2, 3, 7, 19], ["a", "b", "c", "d"]))
  })

  it("Should work for random primes", function () {
    for (let i = 0; i < 100; i++) {
      const size = randrange(2, 3)
      const numbers = [...Array(size).keys()]
        .map(() => primes[randrange(0, 7)])
        .filter((elem, idx, self) => idx === self.indexOf(elem))
      const words = "abcd".slice(0, numbers.length).split("")
      assert.deepEqual(fizzbuzzPlusPlus(numbers, words), ans(numbers, words))
    }
  })
})
