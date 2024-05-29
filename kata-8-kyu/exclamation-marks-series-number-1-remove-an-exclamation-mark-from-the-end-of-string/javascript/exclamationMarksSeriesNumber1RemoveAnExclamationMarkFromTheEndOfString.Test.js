//+ ====================================================================================================================
//+
//+ 8 kyu - Exclamation marks series #1: Remove an exclamation mark from the end of string  [ ID: 57fae964d80daa229d000126 ] (exclamation-marks-series-number-1-remove-an-exclamation-mark-from-the-end-of-string)
//+ URL: https://www.codewars.com/kata/57fae964d80daa229d000126
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { remove } = require("./exclamationMarksSeriesNumber1RemoveAnExclamationMarkFromTheEndOfString")

function doTest(input, expected) {
  const actual = remove(input)
  assert.strictEqual(actual, expected, `for string:\n"${input}"\n`)
}

function solution(s) {
  return s.replace(/!$/, "")
}

function rand(from, to) {
  return Math.floor((to - from + 1) * Math.random() + from)
}

function randLetter() {
  const letters = "abcdefghijklmnopqrstuvwxyz"
  return letters[~~(letters.length * Math.random())]
}

function randWord(n) {
  const len = n || rand(3, 7),
    array = []
  for (let i = 0; i < len; i++) array[i] = randLetter()
  return array.join("")
}

function randMarksString() {
  const len = rand(1, 6),
    array = []
  for (let i = 0; i < len; i++) array[i] = randWord() + (rand(0, 1000) % 4 == 0 ? "!" : "")

  return array.join(" ") + "!".repeat(Math.max(0, rand(-2, 5)))
}

describe("Tests suite", function () {
  it("sample tests", function () {
    doTest("Hi!", "Hi")
    doTest("Hi!!!", "Hi!!")
    doTest("!Hi", "!Hi")
    doTest("!Hi!", "!Hi")
    doTest("Hi! Hi!", "Hi! Hi")
    doTest("Hi", "Hi")
  })

  it("random tests", function () {
    for (let i = 0; i < 100; i++) {
      const string = randMarksString()
      doTest(string, solution(string))
    }
  })
})
