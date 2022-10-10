//+ ====================================================================================================================
//+
//+ 8 kyu - Grasshopper - Bug Squashing  [ ID: 56214b6864fe8813f1000019 ] (grasshopper-bug-squashing)
//+ URL: https://www.codewars.com/kata/56214b6864fe8813f1000019
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { main, health, position, coins, log } = require("./grasshopperBugSquashing")

describe("syntax bug fixes", () => {
  it("should define varirables and store values", () => {
    assert.strictEqual(health, 100)
    assert.strictEqual(position, 0)
    assert.strictEqual(coins, 0)
  })
})
describe("reference error bug fixes", () => {
  it("should only call functions that exist", () => {
    assert.doesNotThrow(() => {
      main()
    })
  })
})
describe("runtime error bug fixes", () => {
  it("should roll dice first", function () {
    assert.strictEqual(log[0], "rollDice")
  })
  it("should move second", function () {
    assert.strictEqual(log[1], "move")
  })
  it("should combat third", function () {
    assert.strictEqual(log[2], "combat")
  })
  it("should get coins fourth", function () {
    assert.strictEqual(log[3], "getCoins")
  })
  it("should buy health fifth", function () {
    assert.strictEqual(log[4], "buyHealth")
  })
  it("should print status sixth", function () {
    assert.strictEqual(log[5], "printStatus")
  })
})
