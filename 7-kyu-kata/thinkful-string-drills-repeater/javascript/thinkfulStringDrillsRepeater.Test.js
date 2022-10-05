// 7 kyu - Thinkful - String Drills: Repeater  [ ID: 585a1a227cb58d8d740001c3  (thinkful-string-drills-repeater) ]
// URL: https://www.codewars.com/kata/585a1a227cb58d8d740001c3
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Thinkful - String Drills: Repeater", () => {
  it("Fixed tests", () => {
    assert.strictEqual(repeater("a", 5), "aaaaa")
    assert.strictEqual(repeater("Na", 16), "NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa")
    assert.strictEqual(repeater("Wub ", 6), "Wub Wub Wub Wub Wub Wub ")
  })

  function myrepeater(string, n) {
    return string.repeat(n)
  }

  it("More Tests", () => {
    assert.strictEqual(repeater("la", 12), myrepeater("la", 12))
    assert.strictEqual(repeater("dance\n", 3), myrepeater("dance\n", 3))
    assert.strictEqual(
      repeater("A stopped clock is right twice a day. ", 2),
      myrepeater("A stopped clock is right twice a day. ", 2)
    )
    assert.strictEqual(repeater("nine", 9), myrepeater("nine", 9))
  })

  it("Random Tests", () => {
    let words = "This is an array of random String".split(" ")
    for (let i = 0; i <= 100; i++) {
      let word = words[Math.floor(Math.random() * words.length)]
      let n = Math.floor(Math.random() * (10 - 1) + 1)
      assert.strictEqual(repeater(word, n), myrepeater(word, n), `Testing for string = ${JSON.stringify(word)}, n = ${n}`)
    }
  })
})
