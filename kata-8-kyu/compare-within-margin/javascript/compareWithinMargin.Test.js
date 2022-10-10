//+ ====================================================================================================================
//+
//+ 8 kyu - Compare within margin  [ ID: 56453a12fcee9a6c4700009c ] (compare-within-margin)
//+ URL: https://www.codewars.com/kata/56453a12fcee9a6c4700009c
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | LOGIC
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { closeCompare } = require("./compareWithinMargin")

describe("Close compare function.", () => {
  it("No margin", () => {
    assert.strictEqual(closeCompare(4, 5), -1)
    assert.strictEqual(closeCompare(5, 5), 0)
    assert.strictEqual(closeCompare(6, 5), 1)

    assert.strictEqual(closeCompare(-4, -3), -1, "a & b may be < 0")
    assert.strictEqual(closeCompare(-5, -5), 0, "a & b may be < 0")
    assert.strictEqual(closeCompare(-5, -6), 1, "a & b may be < 0")
  })

  it("With margin of 3", () => {
    assert.strictEqual(closeCompare(2, 5, 3), 0)
    assert.strictEqual(closeCompare(5, 5, 3), 0)
    assert.strictEqual(closeCompare(8, 5, 3), 0)
    assert.strictEqual(closeCompare(8.1, 5, 3), 1)
    assert.strictEqual(closeCompare(1.99, 5, 3), -1)
  })
})

describe("Random tests", () => {
  let sol = (a, b, m) => (Math.abs(a - b) <= m ? 0 : (a > b) - (a < b)),
    rnd = (a, b) => a + ~~(Math.random() * b),
    i = 100
  while (i--) {
    let a = rnd(-1e4, 2e4),
      b = rnd(-1e4, 2e4),
      m = rnd(0, 1e4)
    it(`compare : ${a} & ${b}, margin : ${m}`, () => {
      const expected = sol(a, b, m)
      const actual = closeCompare(a, b, m)
      assert.strictEqual(actual, expected)
    })
  }
})
