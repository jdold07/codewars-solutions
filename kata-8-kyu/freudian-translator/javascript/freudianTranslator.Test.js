//+ ====================================================================================================================
//+
//+ 8 kyu - Freudian translator   [ ID: 5713bc89c82eff33c60009f7 ] (freudian-translator)
//+ URL: https://www.codewars.com/kata/5713bc89c82eff33c60009f7
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { toFreud } = require("./freudianTranslator")

describe("Final Tests", () => {
  it("Fixed test", () => {
    assert.deepEqual(toFreud(""), "")
    assert.deepEqual(toFreud("test"), "sex")
    assert.deepEqual(toFreud("This is a test"), "sex sex sex sex")
    assert.deepEqual(toFreud("This is a longer test"), "sex sex sex sex sex")
    assert.deepEqual(toFreud("You're becoming a true freudian expert"), "sex sex sex sex sex sex")
  })
})

function toffreud(string) {
  string = string.split(" ")
  for (let i = 0; i < string.length; i++) {
    string[i] = "sex"
  }

  return string.join(" ")
}

function newword() {
  let arr = []
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let length = 3 + Math.floor(Math.random() * 5)

  for (let i = 0; i < length; i++) {
    arr.push(letters[Math.floor(Math.random() * 48)])
  }
  return arr.join("")
}

it("Random test", () => {
  for (let j = 0; j <= 100; j++) {
    let arrlength = Math.floor(2 + Math.random() * 50)
    let arr2 = []

    for (let k = 0; k < arrlength; k++) {
      arr2.push(newword())
    }
    arr2 = arr2.join(" ")
    console.log("Original string was " + "'" + arr2 + "'")
    assert.deepEqual(toFreud(arr2), toffreud(arr2), arr2)
  }
})
