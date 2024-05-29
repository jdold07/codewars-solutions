//+ ====================================================================================================================
//+
//+ 8 kyu - Abbreviate a Two Word Name  [ ID: 57eadb7ecd143f4c9c0000a3 ] (abbreviate-a-two-word-name)
//+ URL: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
//+ Category: REFERENCE  |  Tags: STRINGS | ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { abbrevName } = require("./abbreviateATwoWordName")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(abbrevName("Sam Harris"), "S.H")
    assert.strictEqual(abbrevName("Patrick Feenan"), "P.F")
    assert.strictEqual(abbrevName("Evan Cole"), "E.C")
    assert.strictEqual(abbrevName("P Favuzzi"), "P.F")
    assert.strictEqual(abbrevName("David Mendieta"), "D.M")

    assert.strictEqual(abbrevName("george clooney"), "G.C")
    assert.strictEqual(abbrevName("marky mark"), "M.M")
    assert.strictEqual(abbrevName("eliza doolittle"), "E.D")
    assert.strictEqual(abbrevName("reese witherspoon"), "R.W")
  })
})

describe("Random tests", () => {
  function makeWord(min, max) {
    let array = []
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let length = Math.ceil(Math.random() * max + min)
    for (let i = 0; i < length; i++) {
      array.push(possible[Math.floor(Math.random() * possible.length)])
    }
    return array.join("")
  }

  function makeString() {
    return makeWord(1, 20) + " " + makeWord(1, 20)
  }

  function randomTest(name) {
    let arr = name.split(" ")
    return arr[0][0].toUpperCase() + "." + arr[1][0].toUpperCase()
  }

  it("Testing for 200 random tests", () => {
    for (let i = 0; i < 200; i++) {
      let testString = makeString()
      assert.strictEqual(abbrevName(testString), randomTest(testString), `Testing for name = ${JSON.stringify(testString)}`)
    }
  })
})
