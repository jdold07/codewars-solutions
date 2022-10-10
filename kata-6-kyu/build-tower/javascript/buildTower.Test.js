//+ ====================================================================================================================
//+
//+ 6 kyu - Build Tower  [ ID: 576757b1df89ecf5bd00073b ] (build-tower)
//+ URL: https://www.codewars.com/kata/576757b1df89ecf5bd00073b
//+ Category: REFERENCE  |  Tags: STRINGS | ASCII ART | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { towerBuilder } = require("./buildTower")

function sol(nFloors) {
  let floors = []
  for (let i = 0, n = nFloors - 1; i < nFloors; ++i, --n) {
    floors.push(Array(n + 1).join(" ") + Array(i * 2 + 2).join("*") + Array(n + 1).join(" "))
  }
  return floors
}

describe("towerBuilder", function () {
  it("Basic Test", function () {
    assert.deepEqual(towerBuilder(1), ["*"])
    assert.deepEqual(towerBuilder(2), [" * ", "***"])
    assert.deepEqual(towerBuilder(3), ["  *  ", " *** ", "*****"])
  })
  it("Blanket Test", function () {
    for (let n = 1; n < 100; ++n) {
      assert.deepEqual(towerBuilder(n), sol(n))
    }
  })
})
