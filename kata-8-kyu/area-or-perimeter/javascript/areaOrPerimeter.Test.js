//+ ====================================================================================================================
//+
//+ 8 kyu - Area or Perimeter  [ ID: 5ab6538b379d20ad880000ab ] (area-or-perimeter)
//+ URL: https://www.codewars.com/kata/5ab6538b379d20ad880000ab
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { areaOrPerimeter } = require("./areaOrPerimeter")

const area = (l, w) => (l == w ? Math.pow(l, 2) : 2 * (l + w))
it("Some basic tests", function () {
  for (let i = 1; i < 4; i++) {
    let a = Math.random() * 1200 + 10
    let b = Math.random() * 1500 + 10
    assert.approximately(areaOrPerimeter(a, b), area(a, b), 0.00001)
    assert.strictEqual(areaOrPerimeter(4, 4), 16)
    assert.strictEqual(areaOrPerimeter(6, 10), 32)
  }
})
describe("A lot more test", () => {
  it("Just tests", () => {
    for (let i = 0; i < 100; i++) {
      assert.approximately(areaOrPerimeter(i * 1200 + 2, i * 2100 + 2), area(i * 1200 + 2, i * 2100 + 2), 0.00001)
      assert.approximately(areaOrPerimeter(i * 100 + 20, i * 100 + 20), area(i * 100 + 20, i * 100 + 20), 0.00001)
    }
  })
})
