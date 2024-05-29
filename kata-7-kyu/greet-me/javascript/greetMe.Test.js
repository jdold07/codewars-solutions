//+ ====================================================================================================================
//+
//+ 7 kyu - Greet Me  [ ID: 535474308bb336c9980006f2 ] (greet-me)
//+ URL: https://www.codewars.com/kata/535474308bb336c9980006f2
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { greet } = require("./greetMe")

describe("Greet Me", function () {
  function randomString(len, charSet) {
    charSet = charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let randomString = ""
    for (let i = 0; i < len; i++) {
      let randomPoz = Math.floor(Math.random() * charSet.length)
      randomString += charSet.substring(randomPoz, randomPoz + 1)
    }
    return randomString
  }

  const randName = randomString(Math.floor(Math.random() * 15))

  it("should return 'Hello Name!', if all lowerCase string is given", function () {
    assert.strictEqual(greet("molly"), "Hello Molly!")
  })

  it("should return 'Hello Name!' if string is all upperCase", function () {
    assert.strictEqual(greet("BILLY"), "Hello Billy!")
  })

  it("should return 'Hello Name!' for random string", function () {
    assert.strictEqual(
      greet(randName),
      "Hello " + randName.charAt(0).toUpperCase() + randName.substring(1).toLowerCase() + "!"
    )
  })
})
