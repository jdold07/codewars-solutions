//+ ====================================================================================================================
//+
//+ 8 kyu - How good are you really?  [ ID: 5601409514fc93442500010b ] (how-good-are-you-really)
//+ URL: https://www.codewars.com/kata/5601409514fc93442500010b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { betterThanAverage } from "./howGoodAreYouReally"

describe("Basic tests", () => {
  it("betterThanAverage([2, 3], 5)", () => assert.isTrue(betterThanAverage([2, 3], 5)))
  it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)", () =>
    assert.isTrue(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)))
  it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)", () =>
    assert.isTrue(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)))
  it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)", () =>
    assert.isFalse(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)))
  it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)", () =>
    assert.isFalse(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)))
})

describe("Random tests", () => {
  const sol = (classPoints: number[], yourPoints: number) =>
    classPoints.reduce((a, b) => a + b, 0) / classPoints.length < yourPoints
  for (let i = 0; i < 100; i++) {
    const arr = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100))
    const points = Math.floor(Math.random() * 100)
    const exp = sol(arr, points)
    it(`betterThanAverage([${arr.join(", ")}], ${points})`, () =>
      assert[exp ? "isTrue" : "isFalse"](betterThanAverage(arr, points)))
  }
})
