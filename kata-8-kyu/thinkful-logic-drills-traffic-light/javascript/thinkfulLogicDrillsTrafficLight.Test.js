//+ ====================================================================================================================
//+
//+ 8 kyu - Thinkful - Logic Drills: Traffic light  [ ID: 58649884a1659ed6cb000072 ] (thinkful-logic-drills-traffic-light)
//+ URL: https://www.codewars.com/kata/58649884a1659ed6cb000072
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================


import { assert } from "vitest"
const { updateLight } = require("./thinkfulLogicDrillsTrafficLight")





describe("Thinkful - Logic Drills: Traffic light", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(updateLight("green"), "yellow")
    assert.strictEqual(updateLight("yellow"), "red")
    assert.strictEqual(updateLight("red"), "green")
  })

  it("Random tests", () => {
    let colors = ["green", "yellow", "red"],
      color,
      expected
    for (let i = 0; i < 10; i++) {
      color = colors[Math.floor(Math.random() * 3)]
      expected = { green: "yellow", yellow: "red", red: "green" }[color]
      assert.strictEqual(updateLight(color), expected, "Testing: '" + color + "', expecting: '" + expected + "'")
    }
  })
})


