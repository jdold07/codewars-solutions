//+ ====================================================================================================================
//+
//+ 8 kyu - Power  [ ID: 562926c855ca9fdc4800005b ] (power)
//+ URL: https://www.codewars.com/kata/562926c855ca9fdc4800005b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert, expect } = require("chai")
const { numberToPower } = require("./power")

;(() => {
  ;["log", "log10", "log2", "sqrt", "cbrt", "pow"].forEach(
    (m) => (Math[m] = () => `Sorry, ${m}. is disabled for the moment.`)
  )
  global.eval = () => "Eviiiil!"
})()

it("Check un-use of '**'", () => {
  const testedCode = require("fs").readFileSync("kata-8-kyu/power/javascript/power.js", "utf8")
  expect(testedCode.indexOf("**") < 0, "Verbotten !!!")
})

it("Integers raised to a power", () => {
  assert.strictEqual(numberToPower(4, 2), 16)
  assert.strictEqual(numberToPower(10, 4), 10000)
  assert.strictEqual(numberToPower(10, 0), 1)
  assert.strictEqual(numberToPower(31, 7), 27512614111)
})

it("Floats raised to a power", () => {
  assert.approximately(numberToPower(14.5, 9), 28334269484.11914, 0.000001)
  assert.approximately(numberToPower(Math.PI, 2), 9.869604401089358, 0.000001)
  assert.approximately(numberToPower(Math.PI / 2, 14), 556.7731434176238, 0.000001)
})

it("Random tests", () => {
  let rnd = () => ~~(Math.random() * 13)
  for (let i = 0; i < 99; i++) {
    let n = rnd(),
      p = rnd(),
      exp = [...Array(p)].reduce((r) => r * n, 1)
    console.log(`${n}^${p} => ... ?`)
    assert.strictEqual(numberToPower(n, p), exp)
  }
})
