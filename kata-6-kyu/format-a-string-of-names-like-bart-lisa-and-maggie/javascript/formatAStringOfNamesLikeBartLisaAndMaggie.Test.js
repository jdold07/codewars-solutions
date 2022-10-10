//+ ====================================================================================================================
//+
//+ 6 kyu - Format a string of names like 'Bart, Lisa & Maggie'.  [ ID: 53368a47e38700bd8300030d ] (format-a-string-of-names-like-bart-lisa-and-maggie)
//+ URL: https://www.codewars.com/kata/53368a47e38700bd8300030d
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | DATA TYPES | FORMATTING | ALGORITHMS | LOGIC
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { list } = require("./formatAStringOfNamesLikeBartLisaAndMaggie")

Array.prototype.shuffle = function () {
  for (let i = this.length, j, c; i; ) {
    j = Math.floor(Math.random() * this.length)
    c = this[--i]
    this[i] = this[j]
    this[j] = c
  }
}

it("Basic tests", function () {
  assert.strictEqual(
    list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }, { name: "Homer" }, { name: "Marge" }]),
    "Bart, Lisa, Maggie, Homer & Marge",
    "Must work with many names"
  )
  assert.strictEqual(
    list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]),
    "Bart, Lisa & Maggie",
    "Must work with many names"
  )
  assert.strictEqual(list([{ name: "Bart" }, { name: "Lisa" }]), "Bart & Lisa", "Must work with two names")
  assert.strictEqual(list([{ name: "Bart" }]), "Bart", "Wrong output for a single name")
  assert.strictEqual(list([]), "", "Must work with no names")
})

describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }
  function solist(names) {
    const res = []
    for (let item = 0; item < names.length; item++) {
      res.push(names[item].name)
    }
    return res.length > 1 ? res.slice(0, res.length - 1).join(", ") + " & " + res[res.length - 1] : res.join("")
  }
  let base = [
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" },
    { name: "Moe" },
    { name: "Barney" },
    { name: "Maude" },
    { name: "Ned" },
    { name: "Seymour" }
  ]
  for (let i = 0; i < 40; i++) {
    base.shuffle()
    let testmat = base.slice(0, randint(0, 9))
    let solution = solist(testmat)
    it("Testing for " + (solution != "" ? solution : "None"), function () {
      assert.strictEqual(list(testmat), solution, "It should work for random tests too")
    })
  }
})
