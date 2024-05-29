/* eslint-disable no-unused-vars */
//+ ====================================================================================================================
//+
//+ 5 kyu - Calculating with Functions  [ ID: 525f3eda17c7cd9f9e000b39 ] (calculating-with-functions)
//+ URL: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
//+ Category: REFERENCE  |  Tags: FUNCTIONAL PROGRAMMING
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy
} = require("./calculatingWithFunctions")
const { sample } = require("../../../utils/cwUtils")

describe("static example calculations", function () {
  it("should return the correct value", function () {
  assert.strictEqual(seven(times(five())), 35)
  assert.strictEqual(four(plus(nine())), 13)
  assert.strictEqual(eight(minus(three())), 5)
  assert.strictEqual(six(dividedBy(two())), 3)
})
})

describe("random calculations", function () {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

  it("add", function () {
    for (let i = 0; i < 50; i++) {
      let num1 = sample(numbers)
      let num2 = sample(numbers)
      assert.strictEqual(
        eval(num1 + "(plus(" + num2 + "()))"),
        numbers.indexOf(num1) + numbers.indexOf(num2),
        "Wrong result for " + num1 + " + " + num2
      )
    }
  })

  it("subtract", function () {
    for (let i = 0; i < 50; i++) {
      let num1 = sample(numbers)
      let num2 = sample(numbers)
      assert.strictEqual(
        eval(num1 + "(minus(" + num2 + "()))"),
        numbers.indexOf(num1) - numbers.indexOf(num2),
        "Wrong result for " + num1 + " - " + num2
      )
    }
  })

  it("multiply", function () {
    for (let i = 0; i < 50; i++) {
      let num1 = sample(numbers)
      let num2 = sample(numbers)
      assert.strictEqual(
        eval(num1 + "(times(" + num2 + "()))"),
        numbers.indexOf(num1) * numbers.indexOf(num2),
        "Wrong result for " + num1 + " * " + num2
      )
    }
  })

  it("divide", function () {
    for (let i = 0; i < 50; i++) {
      let num1 = sample(numbers)
      let num2 = sample(numbers.slice(1))
      assert.deepEqual(
        eval(num1 + "(dividedBy(" + num2 + "()))"),
        (numbers.indexOf(num1) / numbers.indexOf(num2)) | 0,
        "Wrong result for " + num1 + " / " + num2
      )
    }
  })
})
