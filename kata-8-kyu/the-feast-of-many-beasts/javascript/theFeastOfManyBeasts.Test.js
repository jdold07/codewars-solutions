//+ ====================================================================================================================
//+
//+ 8 kyu - The Feast of Many Beasts  [ ID: 5aa736a455f906981800360d ] (the-feast-of-many-beasts)
//+ URL: https://www.codewars.com/kata/5aa736a455f906981800360d
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================


const { assert } = require("chai")
const { feast } = require("./theFeastOfManyBeasts")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(feast("great blue heron", "garlic naan"), true)
    assert.strictEqual(feast("chickadee", "chocolate cake"), true)
    assert.strictEqual(feast("brown bear", "bear claw"), false)
    assert.strictEqual(feast("marmot", "mulberry tart"), true)
    assert.strictEqual(feast("porcupine", "pie"), true)
    assert.strictEqual(feast("cat", "yogurt"), false)
    assert.strictEqual(feast("electric eel", "lasagna"), false)
    assert.strictEqual(feast("slow loris", "salsas"), true)
    assert.strictEqual(feast("ox", "orange lox"), true)
    assert.strictEqual(feast("blue-footed booby", "blueberry"), true)

    //random tests
    function makeString(min, max) {
      let array = []
      let possible = "abcdefghijklmnopqrstuvwxyz"
      let length = Math.ceil(Math.random() * max + min)
      if (max < min) return "Maximum argument should be greater than minimum!"
      for (let i = 0; i < length; i++) {
        array.push(possible[Math.floor(Math.random() * possible.length)])
      }
      return array.join("")
    }

    function authorSolution(a, b) {
      return a.charAt(0) === b.charAt(0) && a.charAt(a.length - 1) === b.charAt(b.length - 1)
    }
    for (let i = 0; i < 91; i++) {
      let a = makeString(2, 40)
      let b = makeString(2, 40)
      if (Math.random() < 0.5) {
        b = a[0] + b + a.slice(-1)
      }
      console.log("input a was:", a, ", input b was:", b)
      assert.strictEqual(feast(a, b), authorSolution(a, b))
    }
  })
})


