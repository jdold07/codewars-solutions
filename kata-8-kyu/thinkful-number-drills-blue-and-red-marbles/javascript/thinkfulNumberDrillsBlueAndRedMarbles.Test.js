//+ ====================================================================================================================
//+
//+ 8 kyu - Thinkful - Number Drills: Blue and red marbles  [ ID: 5862f663b4e9d6f12b00003b ] (thinkful-number-drills-blue-and-red-marbles)
//+ URL: https://www.codewars.com/kata/5862f663b4e9d6f12b00003b
//+ Category: REFERENCE  |  Tags: PROBABILITY | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { guessBlue } = require("./thinkfulNumberDrillsBlueAndRedMarbles")

it("Basic tests", function () {
  assert.strictEqual(guessBlue(5, 5, 2, 3), 0.6)
  assert.strictEqual(guessBlue(5, 7, 4, 3), 0.2)
  assert.strictEqual(guessBlue(12, 18, 4, 6), 0.4)
})

function myGuessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (blueStart - bluePulled) / (blueStart - bluePulled + (redStart - redPulled))
}

it("Random tests", function () {
  for (let i = 0; i < 100; i++) {
    let blueStart = ~~(100 * Math.random())
    let redStart = ~~(100 * Math.random())
    let bluePulled = ~~(blueStart * Math.random() - 1)
    let redPulled = ~~(redStart * Math.random() - 1)
    assert.equal(
      guessBlue(blueStart, redStart, bluePulled, redPulled),
      myGuessBlue(blueStart, redStart, bluePulled, redPulled)
    )
  }
})
