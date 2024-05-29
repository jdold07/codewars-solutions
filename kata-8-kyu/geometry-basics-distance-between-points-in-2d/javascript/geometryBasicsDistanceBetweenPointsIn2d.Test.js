//+ ====================================================================================================================
//+
//+ 8 kyu - Geometry Basics: Distance between points in 2D  [ ID: 58dced7b702b805b200000be ] (geometry-basics-distance-between-points-in-2d)
//+ URL: https://www.codewars.com/kata/58dced7b702b805b200000be
//+ Category: REFERENCE  |  Tags: GEOMETRY | FUNDAMENTALS
//+
//+ ====================================================================================================================
//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

//+ ====================================================================================================================

import { assert } from "vitest"
const { distanceBetweenPoints } = require("./geometryBasicsDistanceBetweenPointsIn2d")

describe("Solution", function () {
  it("Fixed Tests (random order)", function () {
    assert.strictEqual(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)), 0)
    assert.strictEqual(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)), 5)
    assert.equal(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)).toFixed(6), 10.728001)
  })

  it("Random Tests", function () {
    for (let i = 0; i < 100; ++i) {
      const a = new Point(Math.random() * 100 - 50, Math.random() * 100 - 50)
      const b = new Point(Math.random() * 100 - 50, Math.random() * 100 - 50)
      const expected = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)).toFixed(6)
      const actual = distanceBetweenPoints(a, b).toFixed(6)
      assert.strictEqual(actual, expected)
    }
  })
})
