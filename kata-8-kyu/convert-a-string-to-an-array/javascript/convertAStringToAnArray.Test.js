//+ ====================================================================================================================
//+
//+ 8 kyu - Convert a string to an array  [ ID: 57e76bc428d6fbc2d500036d ] (convert-a-string-to-an-array)
//+ URL: https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
//+ Category: REFERENCE  |  Tags: ARRAYS | STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { stringToArray } = require("./convertAStringToAnArray")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"])
    assert.deepEqual(stringToArray("I love arrays they are my favorite"), [
      "I",
      "love",
      "arrays",
      "they",
      "are",
      "my",
      "favorite"
    ])
  })
})

describe("Random tests", () => {
  function makeWord(min, max) {
    let array = []
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let length = Math.ceil(Math.random() * max + min)

    for (let i = 0; i < length; i++) {
      array.push(possible[Math.floor(Math.random() * possible.length)])
    }

    return array.join("")
  }

  function makeString(min, max) {
    let array = []
    let length = Math.ceil(Math.random() * max + min)

    for (let i = 0; i < length; i++) {
      array.push(makeWord(min, max))
      if (i < length - 1) array.push(" ")
    }

    return array.join("")
  }

  function randomTest(string) {
    let arr = string.split(" ")
    return arr
  }

  it("Testing for 200 random tests", () => {
    for (let i = 0; i < 200; i++) {
      let testString = makeString(0, 30)
      assert.deepEqual(
        stringToArray(testString),
        randomTest(testString),
        `Testing for string = ${JSON.stringify(testString)}`
      )
    }
  })
})
