//+ ====================================================================================================================
//+
//+ 6 kyu - Replace With Alphabet Position  [ ID: 546f922b54af40e1e90001da ] (replace-with-alphabet-position)
//+ URL: https://www.codewars.com/kata/546f922b54af40e1e90001da
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { alphabetPosition } = require("./replaceWithAlphabetPosition")

function ap(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function (l) {
      return /[a-z]/.test(l)
    })
    .map(function (l) {
      return l.charCodeAt() - 96
    })
    .join(" ")
}

function randomChar() {
  let chars = "abcdefghijklmnopqrstuvwxyz1234567890-=!@#$%^&*()_+[];,./{}:|<>? ",
    rand = Math.floor(Math.random() * chars.length)
  return chars[rand]
}

describe("Replace with alphabet position", () => {
  it("Fixed tests:", () => {
    for (let i = 65; i <= 122; i++) {
      let letter = String.fromCharCode(i)
      assert.strictEqual(alphabetPosition(letter), ap(letter))
    }
    assert.strictEqual(alphabetPosition("-.-'"), "")
  })
})
describe("Randomly generated tests:", () => {
  for (let i = 0; i < 50; i++) {
    let x = ""
    for (let j = 0; j < 8; j++) {
      x += randomChar()
    }
    it(`Testing "${x}"`, () => assert.strictEqual(alphabetPosition(x), ap(x)))
  }
})
