//+ ====================================================================================================================
//+
//+ 8 kyu - L1: Set Alarm  [ ID: 568dcc3c7f12767a62000038 ] (l1-set-alarm)
//+ URL: https://www.codewars.com/kata/568dcc3c7f12767a62000038
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | LOGIC
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { setAlarm } = require("./l1SetAlarm")

describe("Test Suite", () => {
  it("Fixed tests", () => {
    assert.strictEqual(setAlarm(true, true), false, "Should be false.")
    assert.strictEqual(setAlarm(false, true), false, "Should be false.")
    assert.strictEqual(setAlarm(true, false), true, "Should be true.")
    assert.strictEqual(setAlarm(false, false), false, "Should be false.")
  })

  it("Random tests", () => {
    const sol = (a, b) => a && !b

    function randInt(a, b) {
      return (Math.random() * (b - a + 1) + a) | 0
    }

    let a, b
    for (let i = 0; i < 1000; i++) {
      ;[a, b] = [
        [false, false],
        [false, true],
        [true, false],
        [true, true]
      ][randInt(0, 3)]
      const expected = sol(a, b)
      const actual = setAlarm(a, b)
      assert.strictEqual(actual, expected, `Testing for employed = ${a}, vacation = ${b}`)
    }
  })
})
