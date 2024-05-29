//+ ====================================================================================================================
//+
//+ 6 kyu - FizzBuzz Backwards  [ ID: 59ad13d5589d2a1d84000020 ] (fizzbuzz-backwards)
//+ URL: https://www.codewars.com/kata/59ad13d5589d2a1d84000020
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { reverseFizzBuzz } = require("./fizzbuzzBackwards")

it("STATIC TESTS", function () {
  assert.deepEqual(reverseFizzBuzz([1, 2, "Fizz", 4, "Buzz"]), [3, 5])
  assert.deepEqual(reverseFizzBuzz([1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"]), [2, 3])
  assert.deepEqual(reverseFizzBuzz([1, "FizzBuzz", 3, "FizzBuzz", 5, "FizzBuzz"]), [2, 2])
  assert.deepEqual(reverseFizzBuzz(["Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz"]), [1, 6])
})

function reverseFizzBuzzChecker(array) {
  let fizzBuzz = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] == "Fizz" || array[i] == "FizzBuzz") {
      fizzBuzz[0] = i + 1
      break
    }
  }

  for (let j = 0; j < array.length; j++) {
    if (array[j] == "Buzz" || array[j] == "FizzBuzz") {
      fizzBuzz[1] = j + 1
      break
    }
  }

  return fizzBuzz
}

function fizzBuzz(a, b) {
  let array = []
  for (let k = 1; k <= 100; k++) {
    let entry = ""
    if (k % a === 0) entry += "Fizz"
    if (k % b === 0) entry += "Buzz"
    array[k] = entry || k
  }
  array.shift()
  return array
}

it("RANDOM TESTS: Fizz = 1", function () {
  for (let m = 0; m < 2; m++) {
    let randomTwo = Math.floor(Math.random() * 49 + 1)
    let fizzBuzzArray = fizzBuzz(1, randomTwo)
    assert.deepEqual(reverseFizzBuzz(fizzBuzzArray), reverseFizzBuzzChecker(fizzBuzzArray))
  }
})

it("RANDOM TESTS: Fizz = Buzz", function () {
  for (let m = 0; m < 2; m++) {
    let randomTwo = Math.floor(Math.random() * 49 + 1)
    let fizzBuzzArray = fizzBuzz(randomTwo, randomTwo)
    assert.deepEqual(reverseFizzBuzz(fizzBuzzArray), reverseFizzBuzzChecker(fizzBuzzArray))
  }
})

it("RANDOM TESTS", function () {
  for (let m = 0; m < 12; m++) {
    let randomOne = Math.floor(Math.random() * 49 + 1)
    let randomTwo = Math.floor(Math.random() * 49 + 1)
    let fizzBuzzArray = fizzBuzz(randomOne, randomTwo)
    assert.deepEqual(reverseFizzBuzz(fizzBuzzArray), reverseFizzBuzzChecker(fizzBuzzArray))
  }
})
