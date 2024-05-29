//+ ====================================================================================================================
//+
//+ 8 kyu - Get Planet Name By ID  [ ID: 515e188a311df01cba000003 ] (get-planet-name-by-id)
//+ URL: https://www.codewars.com/kata/515e188a311df01cba000003
//+ Category: BUG_FIXES  |  Tags: DEBUGGING
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { getPlanetName } = require("./getPlanetNameById")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(getPlanetName(2), "Venus")
    assert.strictEqual(getPlanetName(5), "Jupiter")
    assert.strictEqual(getPlanetName(3), "Earth")
    assert.strictEqual(getPlanetName(4), "Mars")
    assert.strictEqual(getPlanetName(8), "Neptune")
    assert.strictEqual(getPlanetName(1), "Mercury")
  })
})
