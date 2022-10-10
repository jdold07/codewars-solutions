//+ ====================================================================================================================
//+
//+ 8 kyu - Opposites Attract  [ ID: 555086d53eac039a2a000083 ] (opposites-attract)
//+ URL: https://www.codewars.com/kata/555086d53eac039a2a000083
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { lovefunc } = require("./oppositesAttract")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(lovefunc(1, 4), true)
    assert.strictEqual(lovefunc(2, 2), false)
    assert.strictEqual(lovefunc(0, 1), true)
    assert.strictEqual(lovefunc(0, 0), false)
  })
})

describe("lovefunc", function () {
  it("should work for random numbers", function () {
    for (let i = 0; i < 100; ++i) {
      let flower1 = (Math.random() * 1000) | 0
      let flower2 = (Math.random() * 1000) | 0
      assert.strictEqual(
        lovefunc(flower1, flower2),
        (flower1 + flower2) % 2 === 1,
        "didn't work for flowers with " + flower1 + " and " + flower2 + " petals"
      )
    }
  })
})
