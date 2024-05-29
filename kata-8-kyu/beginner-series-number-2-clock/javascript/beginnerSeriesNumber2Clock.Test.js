//+ ====================================================================================================================
//+
//+ 8 kyu - Beginner Series #2 Clock  [ ID: 55f9bca8ecaa9eac7100004a ] (beginner-series-number-2-clock)
//+ URL: https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { past } = require("./beginnerSeriesNumber2Clock")

if (Math.random == undefined) assert.strictEqual(false, true, "Math Object must contain random Method!")
if (Math.floor == undefined) assert.strictEqual(false, true, "Math Object must contain floor Method!")
if (Math.random.toString().indexOf("[native code]") == -1 || Math.random.toString().length != 35)
  assert.strictEqual(false, true, "Math.random method must be Native!")
if (Math.floor.toString().indexOf("[native code]") == -1 || Math.floor.toString().length != 34)
  assert.strictEqual(false, true, "Math.floor method must be Native!")
//######Security Tests######

describe("Fixed Tests", () => {
  it("Tests", () => {
    assert.strictEqual(past(0, 1, 1), 61000)
    assert.strictEqual(past(1, 1, 1), 3661000)
    assert.strictEqual(past(0, 0, 0), 0)
    assert.strictEqual(past(1, 0, 1), 3601000)
    assert.strictEqual(past(1, 0, 0), 3600000)
  })
})

describe("Random Tests", () => {
  it("Tests", () => {
    let tests = genTests()
    for (let test of tests) assert.strictEqual(past(test.h, test.m, test.s), test.ans)
  })
})

function genTests() {
  let tests = []

  let ans = (h, m, s) => 1000 * (h * 3600 + m * 60 + s)

  for (let i = 0; i < 100; i++) {
    let test = {}

    test.h = Math.floor(Math.random() * 24)
    test.m = Math.floor(Math.random() * 60)
    test.s = Math.floor(Math.random() * 60)

    test.ans = ans(test.h, test.m, test.s)

    tests.push(test)
  }

  return tests
}
