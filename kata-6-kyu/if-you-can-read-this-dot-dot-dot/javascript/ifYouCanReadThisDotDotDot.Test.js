//+ ====================================================================================================================
//+
//+ 6 kyu - If you can read this...  [ ID: 586538146b56991861000293 ] (if-you-can-read-this-dot-dot-dot)
//+ URL: https://www.codewars.com/kata/586538146b56991861000293
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { to_nato } = require("./ifYouCanReadThisDotDotDot")

function randTests(num) {
  let arr = [
    "Alfa",
    "November",
    "Bravo",
    "Oscar",
    "Charlie",
    "Papa",
    "Delta",
    "Quebec",
    "Echo",
    "Romeo",
    "Foxtrot",
    "Sierra",
    "Golf",
    "Tango",
    "Hotel",
    "Uniform",
    "India",
    "Victor",
    "Juliett",
    "Whiskey",
    "Xray",
    "Kilo",
    "Lima",
    "Yankee",
    "Mike",
    "Zulu",
    "?",
    ".",
    "!"
  ]

  for (let k = 0; k < num; k++) {
    let strIn = [],
      strOut = []

    for (let i = 0; i < 9; i++) {
      const rd = Math.floor(Math.random() * (arr.length - 1))
      strIn.push(arr[rd][0])
      strOut.push(arr[rd])
    }
    assert.strictEqual(to_nato(strIn.join("")), strOut.join(" "))
  }
}

describe("Tests using hard-coded strings", function () {
  it("Should return a correctly translated string", function () {
    assert.strictEqual(
      to_nato("If you can read"),
      "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
    )
    assert.strictEqual(
      to_nato("Did not see that coming"),
      "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf"
    )
    assert.strictEqual(to_nato("go for it!"), "Golf Oscar Foxtrot Oscar Romeo India Tango !")
  })
})

describe("Tests using random strings", function () {
  it("Should return a correctly translated string", function () {
    randTests(10)
  })
})
