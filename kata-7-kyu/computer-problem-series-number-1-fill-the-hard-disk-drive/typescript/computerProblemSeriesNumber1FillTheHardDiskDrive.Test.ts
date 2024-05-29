//+ ====================================================================================================================
//+
//+ 7 kyu - Computer problem series #1: Fill the Hard Disk Drive  [ ID: 5d49c93d089c6e000ff8428c ] (computer-problem-series-number-1-fill-the-hard-disk-drive)
//+ URL: https://www.codewars.com/kata/5d49c93d089c6e000ff8428c
//+ Category: REFERENCE  |  Tags: LISTS | ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { save } from "./computerProblemSeriesNumber1FillTheHardDiskDrive"

describe("Fixed tests", () => {
  it("save([4, 4, 4, 3, 3], 12)", () => assert.strictEqual(save([4, 4, 4, 3, 3], 12), 3))
  it("save([4, 4, 4, 3, 3], 11)", () => assert.strictEqual(save([4, 4, 4, 3, 3], 11), 2))
  it("save([4, 8, 15, 16, 23, 42], 108)", () =>
    assert.strictEqual(save([4, 8, 15, 16, 23, 42], 108), 6))
  it("save([13], 13)", () => assert.strictEqual(save([13], 13), 1))
  it("save([1, 2, 3, 4], 250)", () => assert.strictEqual(save([1, 2, 3, 4], 250), 4))
  it("save([100], 500)", () => assert.strictEqual(save([100], 500), 1))
  it("save([11, 13, 15, 17, 19], 8)", () => assert.strictEqual(save([11, 13, 15, 17, 19], 8), 0))
  it("save([45], 12)", () => assert.strictEqual(save([45], 12), 0))
})

describe("Random tests", () => {
  const sol = (sizes: number[], hd: number) =>
    sizes.reduce((acc, item) => [acc[0] + (acc[1] + item <= hd ? 1 : 0), acc[1] + item], [0, 0])[0]
  const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
  for (let i = 0; i < 100; i++) {
    const hd = rand(0, 100)
    const sizes = Array(rand(0, 50))
      .fill(0)
      .map(() => rand(0, 20))
    it(`save([${sizes.join(", ")}], ${hd})`, () =>
      assert.strictEqual(save(sizes.slice(), hd), sol(sizes, hd)))
  }
})
