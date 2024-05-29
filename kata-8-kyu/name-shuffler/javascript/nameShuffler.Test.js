//+ ====================================================================================================================
//+
//+ 8 kyu - Name Shuffler  [ ID: 559ac78160f0be07c200005a ] (name-shuffler)
//+ URL: https://www.codewars.com/kata/559ac78160f0be07c200005a
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { nameShuffler } = require("./nameShuffler")

// if (typeof nameShuffler != "function") {
//   if (typeof nameSuffler === "function") nameShuffler = nameSuffler
//   if (typeof nameShuffle === "function") nameShuffler = nameShuffle
//   if (typeof nameSuffle === "function") nameShuffler = nameSuffle
// }

describe("Basic tests", function () {
  it("Should work with basic tests", function () {

  assert.strictEqual(nameShuffler("john McClane"), "McClane john")
  assert.strictEqual(nameShuffler("Mary jeggins"), "jeggins Mary")
  assert.strictEqual(nameShuffler("tom jerry"), "jerry tom")
  assert.strictEqual(nameShuffler("Mary Jane"), "Jane Mary")
  assert.strictEqual(nameShuffler("John Doe"), "Doe John")
  assert.strictEqual(nameShuffler("William O'Brien"), "O'Brien William")
  assert.strictEqual(nameShuffler("George Huffingquane-McGafferty"), "Huffingquane-McGafferty George")
})
})

describe("Basic tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }
  function sol_shuffler(str) {
    return str.replace(/([A-Za-z'-]+)(\s)([A-Za-z'-]+)/, "$3$2$1")
  }
  const first_names = ["Augustus", "Tobias", "Vernon", "Ryan", "Bob", "Kareem", "Miguel", "Cyril", "Chris", "Simon", "Tim"]
  const last_names = [
    "Hill",
    "Beecher",
    "Schillinger",
    "O'Reily",
    "Rebadow",
    "Said",
    "Alvarez",
    "O'Reily",
    "Keller",
    "Adebisi",
    "McManus"
  ]

  for (let _ = 0; _ < 40; _++) {
    const s = [first_names[randint(0, first_names.length - 1)], last_names[randint(0, last_names.length - 1)]].join(" ")
    it("Testing for " + s, function () {
      assert.strictEqual(nameShuffler(s), sol_shuffler(s), "It should work for random inputs too")
    })
  }
})
