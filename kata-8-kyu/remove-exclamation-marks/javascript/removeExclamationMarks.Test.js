//+ ====================================================================================================================
//+
//+ 8 kyu - Remove exclamation marks  [ ID: 57a0885cbb9944e24c00008e ] (remove-exclamation-marks)
//+ URL: https://www.codewars.com/kata/57a0885cbb9944e24c00008e
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { removeExclamationMarks } = require("./removeExclamationMarks")

describe("Tests", () => {
  it("Fixed tests", () => {
    assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World")
    assert.strictEqual(removeExclamationMarks("Hello World!!!"), "Hello World")
    assert.strictEqual(removeExclamationMarks("Hi! Hello!"), "Hi Hello")
  })

  it("Random tests", () => {
    function solution(s) {
      return s.replace(/!/g, "")
    }

    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz"
    const getRandomString = () =>
      Array.from({ length: 10 })
        .map(() => abc[~~(Math.random() * abc.length)])
        .join("")

    let rs = getRandomString() + "!" + getRandomString() + " " + getRandomString() + "!" + getRandomString()
    assert.strictEqual(removeExclamationMarks(rs), solution(rs), `Testing for s = ${JSON.stringify(rs)}`)
  })
})
