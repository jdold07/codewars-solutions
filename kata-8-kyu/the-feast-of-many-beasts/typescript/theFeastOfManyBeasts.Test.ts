//+ ====================================================================================================================
//+
//+ 8 kyu - The Feast of Many Beasts  [ ID: 5aa736a455f906981800360d ] (the-feast-of-many-beasts)
//+ URL: https://www.codewars.com/kata/5aa736a455f906981800360d
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { feast } from "./theFeastOfManyBeasts"

describe("Testing...", function () {
  it("Basic fixed tests", function () {
    assert.isTrue(feast("great blue heron", "garlic naan"), "Should be true")
    assert.isTrue(feast("chickadee", "chocolate cake"), "Should be true")
    assert.isFalse(feast("brown bear", "bear claw"), "Should be false")
    assert.isTrue(feast("marmot", "mulberry tart"), "Should be true")
    assert.isTrue(feast("porcupine", "pie"), "Should be true")
    assert.isFalse(feast("cat", "yogurt"), "Should be false")
    assert.isFalse(feast("electric eel", "lasagna"), "Should be false")
    assert.isTrue(feast("slow loris", "salsas"), "Should be true")
    assert.isTrue(feast("ox", "orange lox"), "Should be true")
    assert.isTrue(feast("blue-footed booby", "blueberry"), "Should be true")
  })
})

describe("Random Tests", () => {
  for (let i = 0; i < 100; i++) {
    const a = makeString()
    let b = makeString()
    if (Math.random() < 0.5) {
      b = a[0] + b + a.slice(-1)
    }
    it(`Testing for beast = ${JSON.stringify(a)}, dish = ${JSON.stringify(b)}`, function () {
      assert.strictEqual(feast(a, b), authorSolution(a, b))
    })
  }
})

const authorSolution = (beast: string, dish: string): boolean => {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

function makeString(): string {
  const len: number = Math.ceil(Math.random() * 40 + 2)
  return [...Array(len)].map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join("")
}
