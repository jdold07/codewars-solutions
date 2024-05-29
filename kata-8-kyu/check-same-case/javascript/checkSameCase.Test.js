//+ ====================================================================================================================
//+
//+ 8 kyu - Check same case  [ ID: 5dd462a573ee6d0014ce715b ] (check-same-case)
//+ URL: https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { sameCase } = require("./checkSameCase")

function doTest(a, b, expected) {
  assert.strictEqual(sameCase(a, b), expected, `For sameCase("${a}","${b}")`)
}

describe("Fixed tests", function () {
  it("Same Case", function () {
    doTest("C", "B", 1)
    doTest("Z", "D", 1)
    doTest("A", "G", 1)
    doTest("M", "M", 1)
    doTest("I", "Q", 1)
    doTest("P", "G", 1)
    doTest("T", "S", 1)
    doTest("F", "P", 1)
    doTest("C", "V", 1)
    doTest("M", "T", 1)
    doTest("E", "Z", 1)
    doTest("N", "Y", 1)
    doTest("S", "H", 1)
    doTest("V", "W", 1)
    doTest("s", "o", 1)
    doTest("l", "n", 1)
    doTest("a", "v", 1)
    doTest("u", "k", 1)
    doTest("c", "r", 1)
    doTest("p", "s", 1)
    doTest("g", "a", 1)
    doTest("b", "m", 1)
    doTest("m", "u", 1)
    doTest("i", "y", 1)
    doTest("b", "s", 1)
    doTest("c", "z", 1)
    doTest("b", "a", 1)
    doTest("d", "d", 1)
  })
  it("Different Cases", function () {
    doTest("A", "s", 0)
    doTest("c", "B", 0)
    doTest("b", "Z", 0)
    doTest("H", "d", 0)
    doTest("d", "N", 0)
    doTest("D", "u", 0)
    doTest("y", "L", 0)
    doTest("U", "b", 0)
    doTest("Z", "q", 0)
    doTest("O", "g", 0)
    doTest("g", "B", 0)
    doTest("R", "z", 0)
    doTest("I", "o", 0)
    doTest("I", "e", 0)
  })
  it("Non-letters", function () {
    doTest("A", "?", -1)
    doTest("\0", "B", -1)
    doTest("\t", "Z", -1)
    doTest("H", ":", -1)
    doTest("!", "@", -1)
    doTest("@", "H", -1)
    doTest("#", "4", -1)
    doTest("$", "-", -1)
    doTest("%", "0", -1)
    doTest("^", "B", -1)
    doTest("&", "&", -1)
    doTest("*", "*", -1)
    doTest("(", "7", -1)
    doTest(")", "6", -1)
    doTest("_", "8", -1)
    doTest("{", "9", -1)
    doTest("+", "8", -1)
    doTest("}", "(", -1)
    doTest(":", ")", -1)
    doTest("1", "_", -1)
    doTest("2", "{", -1)
    doTest("3", "+", -1)
    doTest("4", "}", -1)
    doTest("5", "A", -1)
    doTest("7", "s", -1)
    doTest("6", ":", -1)
    doTest("8", "1", -1)
    doTest("9", "#", -1)
    doTest("8", "$", -1)
    doTest("9", "!", -1)
    doTest("-", "G", -1)
    doTest("0", "2", -1)
  })
})

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz"
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const NON_LETTERS = "0123456789~#&'|()[]{}@$^?!.:;,+*-=^_"

//Returns a random element from the given array or string
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

const bl = () => [getRandomElement(LOWERCASE), getRandomElement(LOWERCASE), 1] //both lowercase
const bu = () => [getRandomElement(UPPERCASE), getRandomElement(UPPERCASE), 1] //both uppercase
const fl = () => [getRandomElement(LOWERCASE), getRandomElement(UPPERCASE), 0] //first lower, second upper
const sl = () => [getRandomElement(UPPERCASE), getRandomElement(LOWERCASE), 0] //first upper, second lower
const bn = () => [getRandomElement(NON_LETTERS), getRandomElement(NON_LETTERS), -1] //both non-letters
const fn = () => [getRandomElement(NON_LETTERS), getRandomElement(LOWERCASE + UPPERCASE), -1] //first non-letter, second letter
const sn = () => [getRandomElement(LOWERCASE + UPPERCASE), getRandomElement(NON_LETTERS), -1] //first letter, second non-letter

describe("Random tests", function () {
  it("", function () {
    for (let i = 0; i < 100; i++) {
      doTest(...getRandomElement([bl, bu, fl, sl, bn, fn, sn])())
    }
  })
})
