//+ ====================================================================================================================
//+
//+ 6 kyu - The Deaf Rats of Hamelin  [ ID: 598106cb34e205e074000031 ] (the-deaf-rats-of-hamelin)
//+ URL: https://www.codewars.com/kata/598106cb34e205e074000031
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ALGORITHMS | QUEUES | DATA STRUCTURES
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { countDeafRats } = require("./theDeafRatsOfHamelin")

describe("Solution Tests", function () {
  it("ex1", function () {
    assert.strictEqual(countDeafRats("~O~O~O~O P"), 0)
  })

  it("ex2", function () {
    assert.strictEqual(countDeafRats("P O~ O~ ~O O~"), 1)
  })

  it("ex3", function () {
    assert.strictEqual(countDeafRats("~O~O~O~OP~O~OO~"), 2)
  })

  it("rats", function () {
    assert.strictEqual(countDeafRats("O~~OO~~OO~~OO~P~OO~~OO~~OO~~O"), 8)
    assert.strictEqual(countDeafRats("O~~OO~~OO~~OO~ P~OO~~OO~~OO~~O"), 8)
    assert.strictEqual(countDeafRats("O~~OO~~OO~~OO~P ~OO~~OO~~OO~~O"), 8)
  })

  it("highlander", function () {
    assert.strictEqual(countDeafRats("~OP"), 0)
    assert.strictEqual(countDeafRats("PO~"), 0)
    assert.strictEqual(countDeafRats("O~P"), 1)
    assert.strictEqual(countDeafRats("P~O"), 1)
  })

  it("empty", function () {
    assert.strictEqual(countDeafRats("         P"), 0)
    assert.strictEqual(countDeafRats("P         "), 0)
    assert.strictEqual(countDeafRats("         P      "), 0)
    assert.strictEqual(countDeafRats("P"), 0)
  })

  // ====================================

  // Reference implementation for the Random test cases
  let countDeafRatsDinglemouse20170803 = function (town) {
    let s = ""
    for (let i = 0; i < town.length; i++) {
      let c = town[i]
      if (c == "~") {
        s += "R"
        i++
      } else if (c == "O") {
        s += "L"
        i++
      } else if (c == "P") {
        s += c
      }
    }
    let s1 = s.substring(0, s.indexOf("P")),
      s2 = s.substring(s.indexOf("P") + 1)
    let deaf = 0
    // Rats to left of the Piper should be going right
    deaf += s1.replace(/R/g, "").length
    // Rats to right of the Piper should be going left
    deaf += s2.replace(/L/g, "").length
    return deaf
  }

  const makeRatFacing = function (mostly) {
    let d = Math.random() * 3
    if (mostly == "L") {
      // Mostly facing left
      if (d < 2.5) return "O~"
      if (d < 2.8) return "~O"
    } else {
      // Mostly facing right
      if (d < 2.5) return "~O"
      if (d < 2.8) return "O~"
    }
    return "  "
  }

  const makeTown = function (piperPos) {
    let ratsLeft = Math.floor(Math.random() * 20) + 5
    let ratsRight = Math.floor(Math.random() * 20) + 5
    let town = ""
    let piper = false
    if (piperPos == "L") {
      town += "P"
      piper = true
    }
    for (let r = 0; r < ratsLeft; r++) {
      town += makeRatFacing(piper ? "L" : "R")
    }
    if (piperPos == "M") {
      town += "P"
      piper = true
    }
    for (let r = 0; r < ratsRight; r++) {
      town += makeRatFacing(piper ? "L" : "R")
    }
    if (piperPos == "R") town += "P"
    return town
  }

  it("random", function () {
    for (let r = 1; r <= 200; r++) {
      let p = Math.floor(Math.random() * 3)
      let piper = p == 0 ? "L" : p == 1 ? "M" : "R"
      let town = makeTown(piper)
      let expected = countDeafRatsDinglemouse20170803(town)
      console.log(`Random test ${r} : <span style='color:green'>${town}</span> has ${expected} deaf rats`)
      assert.strictEqual(countDeafRats(town), expected)
    }
  })
})
