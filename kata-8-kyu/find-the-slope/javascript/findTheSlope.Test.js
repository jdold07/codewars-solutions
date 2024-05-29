//+ ====================================================================================================================
//+
//+ 8 kyu - Find the Slope  [ ID: 55a75e2d0803fea18f00009d ] (find-the-slope)
//+ URL: https://www.codewars.com/kata/55a75e2d0803fea18f00009d
//+ Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS | ALGEBRA
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { slope } = require("./findTheSlope")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(slope([12, -18, -15, -18]), "0")
    assert.strictEqual(slope([3, -20, 5, 8]), "14")
    assert.strictEqual(slope([17, -3, 17, 8]), "undefined")
    assert.strictEqual(slope([1, -19, -2, -7]), "-4")
    assert.strictEqual(slope([19, 3, 20, 3]), "0")
    assert.strictEqual(slope([6, -12, 15, -3]), "1")
    assert.strictEqual(slope([15, -3, 15, -3]), "undefined")
    assert.strictEqual(slope([9, 3, 19, -17]), "-2")
    assert.strictEqual(slope([12, -18, -15, -18]), "0")
    assert.strictEqual(slope([3, -20, 5, 8]), "14")
    assert.strictEqual(slope([17, -3, 17, 8]), "undefined")
    assert.strictEqual(slope([1, -19, -2, -7]), "-4")
    assert.strictEqual(slope([19, 3, 20, 3]), "0")
    assert.strictEqual(slope([6, -12, 15, -3]), "1")
    assert.strictEqual(slope([15, -3, 15, -3]), "undefined")
    assert.strictEqual(slope([9, 3, 19, -17]), "-2")
    assert.strictEqual(slope([3, 6, 4, 10]), "4")
    assert.strictEqual(slope([2, 7, 4, -7]), "-7")

    assert.strictEqual(slope([1, 24, 2, 88]), "64")
    assert.strictEqual(slope([4, 384, 8, 768]), "96")
    assert.strictEqual(slope([4, 16, 4, 18]), "undefined")
    assert.strictEqual(slope([7, 28, 9, 64]), "18")
    assert.strictEqual(slope([18, -36, 12, 36]), "-12")
    assert.strictEqual(slope([36, 580, 42, 40]), "-90")
    assert.strictEqual(slope([1, 2, 2, 6]), "4")
    assert.strictEqual(slope([-6, 57, -6, 84]), "undefined")
    assert.strictEqual(slope([92, 12, 96, 64]), "13")
    assert.strictEqual(slope([1, 2, 2, 6]), "4")
    assert.strictEqual(slope([90, 54, 90, 2]), "undefined")
    assert.strictEqual(slope([3, 6, 4, 9]), "3")
    assert.strictEqual(slope([-2, -5, 2, 3]), "2")
    assert.strictEqual(slope([3, 3, 2, 0]), "3")
  })
})
