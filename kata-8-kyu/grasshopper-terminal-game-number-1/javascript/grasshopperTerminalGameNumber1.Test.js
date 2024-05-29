//+ ====================================================================================================================
//+
//+ 8 kyu - Grasshopper - Terminal Game #1  [ ID: 55e8aba23d399a59500000ce ] (grasshopper-terminal-game-number-1)
//+ URL: https://www.codewars.com/kata/55e8aba23d399a59500000ce
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { Hero } = require("./grasshopperTerminalGameNumber1")

describe("hero class", function () {
  it("should create a hero", function () {
    let myHero = new Hero()
    assert.strictEqual(myHero.name, "Hero")
    assert.strictEqual(myHero.experience, 0)
    assert.strictEqual(myHero.health, 100)
    assert.strictEqual(myHero.position, "00")
    assert.strictEqual(myHero.damage, 5)
  })
  it("should use name argument", function () {
    let newHero = new Hero("Greg")
    assert.strictEqual(newHero.name, "Greg")
  })
})
