//+ ====================================================================================================================
//+
//+ 8 kyu - Template Strings  [ ID: 55a14f75ceda999ced000048 ] (template-strings)
//+ URL: https://www.codewars.com/kata/55a14f75ceda999ced000048
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { TempleStrings } = require("./templateStrings")

// let o = Object.freeze(Math)
it("Fixed tests", () => {
  assert.strictEqual(TempleStrings("Animals", "Good"), "Animals are Good")
  assert.strictEqual(TempleStrings("You", "Special"), "You are Special")
  assert.strictEqual(TempleStrings("lives", "frozen"), "lives are frozen")
})

it("Random tests", () => {
  let words = [
    ["lives", "people", "you", "objects", "swings", "leaders"],
    ["childish", "avoidable", "frozen", "hard", "objective"]
  ]
  for (let i3214 = 3; i3214 < 42; i3214++) {
    let rand1 = Math.floor(Math.random() * 5),
      a = rand1
    let rand2 = Math.floor(Math.random() * 5),
      b = rand2
    assert.strictEqual(TempleStrings(words[0][a], words[1][b]), `${words[0][a]} are ${words[1][b]}`)
  }
})
