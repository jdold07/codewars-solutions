//+ ====================================================================================================================
//+
//+ 7 kyu - Discover The Original Price  [ ID: 552564a82142d701f5001228 ] (discover-the-original-price)
//+ URL: https://www.codewars.com/kata/552564a82142d701f5001228
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { discoverOriginalPrice } = require("./discoverTheOriginalPrice")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(discoverOriginalPrice(75, 25), 100)
    assert.strictEqual(discoverOriginalPrice(25, 75), 100)
    assert.strictEqual(discoverOriginalPrice(75.75, 25), 101)

    assert.strictEqual(discoverOriginalPrice(373.85, 11.2), 421)
    assert.strictEqual(discoverOriginalPrice(458.2, 17.13), 552.91)
    assert.strictEqual(discoverOriginalPrice(101.45, 27), 138.97)
  })
})
