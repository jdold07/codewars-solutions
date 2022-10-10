//+ ====================================================================================================================
//+
//+ 8 kyu - Grasshopper - Messi Goals  [ ID: 55ca77fa094a2af31f00002a ] (grasshopper-messi-goals)
//+ URL: https://www.codewars.com/kata/55ca77fa094a2af31f00002a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { totalGoals, laLigaGoals, championsLeagueGoals, copaDelReyGoals } = require("./grasshopperMessiGoals")

describe("total goals", function () {
  it("should have the correct value", function () {
    assert.strictEqual(laLigaGoals, 43)
    assert.strictEqual(championsLeagueGoals, 10)
    assert.strictEqual(copaDelReyGoals, 5)
  })
  it("should equal the total", function () {
    assert.strictEqual(totalGoals, 58)
  })
})
