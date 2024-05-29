//+ ====================================================================================================================
//+
//+ 8 kyu - A wolf in sheep's clothing  [ ID: 5c8bfa44b9d1192e1ebd3d15 ] (a-wolf-in-sheeps-clothing)
//+ URL: https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { warnTheSheep } = require("./aWolfInSheepsClothing")

function doTest(queue, expected) {
  const log = `for queue [${queue.join(", ")}]\n`
  const actual = warnTheSheep(queue)
  assert.strictEqual(actual, expected, log)
}

describe("Fixed tests", function () {
  it("Tests", function () {
    doTest(
      ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"],
      "Oi! Sheep number 2! You are about to be eaten by a wolf!"
    )
    doTest(
      ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],
      "Oi! Sheep number 5! You are about to be eaten by a wolf!"
    )
    doTest(
      ["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"],
      "Oi! Sheep number 6! You are about to be eaten by a wolf!"
    )
    doTest(["sheep", "wolf", "sheep"], "Oi! Sheep number 1! You are about to be eaten by a wolf!")
    doTest(["wolf"], "Pls go away and stop eating my sheep")
    doTest(["sheep", "sheep", "wolf"], "Pls go away and stop eating my sheep")
  })
})

function warnTheSheepCheck(queue) {
  let wolf = 0
  if (queue[queue.length - 1] === "wolf" || queue === ["wolf"]) {
    return "Pls go away and stop eating my sheep"
  }
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === "wolf") {
      wolf = i
    }
  }
  let sheep = queue.length - wolf - 1
  return "Oi! Sheep number " + sheep + "! You are about to be eaten by a wolf!"
}

function randint(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

describe("Random tests", function () {
  it("Tests", function () {
    for (let i = 0; i < 100; i++) {
      let n = randint(1, 10)
      let queue = Array(n).fill("sheep")
      queue[randint(1, n) - 1] = "wolf"
      doTest(queue.slice(), warnTheSheepCheck(queue))
    }
  })
})
