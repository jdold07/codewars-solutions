//+ ====================================================================================================================
//+
//+ 8 kyu - A wolf in sheep's clothing  [ ID: 5c8bfa44b9d1192e1ebd3d15 ] (a-wolf-in-sheeps-clothing)
//+ URL: https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { warnTheSheep } from "./aWolfInSheepsClothing"

describe("Basic tests", () => {
  it("Basic tests should work", () => {
    assert.equal(
      warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]),
      "Oi! Sheep number 2! You are about to be eaten by a wolf!"
    )
    assert.equal(
      warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]),
      "Oi! Sheep number 5! You are about to be eaten by a wolf!"
    )
    assert.equal(
      warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]),
      "Oi! Sheep number 6! You are about to be eaten by a wolf!"
    )
    assert.equal(
      warnTheSheep(["sheep", "wolf", "sheep"]),
      "Oi! Sheep number 1! You are about to be eaten by a wolf!"
    )
    assert.equal(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep")
  })
})

describe("Random tests", () => {
  const check = (q: string[]): string => {
    const p = q.reverse().indexOf("wolf")
    return p
      ? `Oi! Sheep number ${p}! You are about to be eaten by a wolf!`
      : "Pls go away and stop eating my sheep"
  }
  const randInt = (min: number, max: number): number => ~~(Math.random() * (max - min + 1)) + min

  for (let i = 1; i <= 100; i++) {
    const n: number = randInt(1, 10)
    const arr: string[] = Array(n).fill("sheep")
    arr[randInt(1, n) - 1] = "wolf"
    const expected: string = check(arr)

    it(`Testing №${i} should work for [${arr}]`, () => {
      warnTheSheep(arr), expected
    })
  }
})
