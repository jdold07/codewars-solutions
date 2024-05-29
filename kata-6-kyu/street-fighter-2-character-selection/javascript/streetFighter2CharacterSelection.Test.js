//+ ====================================================================================================================
//+
//+ 6 kyu - Street Fighter 2 - Character Selection  [ ID: 5853213063adbd1b9b0000be ] (street-fighter-2-character-selection)
//+ URL: https://www.codewars.com/kata/5853213063adbd1b9b0000be
//+ Category: REFERENCE  |  Tags: ARRAYS | LISTS | FUNDAMENTALS | GRAPH THEORY
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { streetFighterSelection } = require("./streetFighter2CharacterSelection")

let fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]

let opts = ["up", "down", "right", "left"]
let moves = []

describe("Testing...", function () {
  it("should work with few moves", function () {
    moves = ["up", "left", "right", "left", "left"]
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), ["Ryu", "Vega", "Ryu", "Vega", "Balrog"])
  })

  it("should work with no selection cursor moves", function () {
    moves = []
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [])
  })

  it("should work when always moving left", function () {
    moves = ["left", "left", "left", "left", "left", "left", "left", "left"]
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      "Vega",
      "Balrog",
      "Guile",
      "Blanka",
      "E.Honda",
      "Ryu",
      "Vega",
      "Balrog"
    ])
  })

  it("should work when always moving right", function () {
    moves = ["right", "right", "right", "right", "right", "right", "right", "right"]
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      "E.Honda",
      "Blanka",
      "Guile",
      "Balrog",
      "Vega",
      "Ryu",
      "E.Honda",
      "Blanka"
    ])
  })

  it("should use all 4 directions clockwise twice", function () {
    moves = ["up", "left", "down", "right", "up", "left", "down", "right"]
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      "Ryu",
      "Vega",
      "M.Bison",
      "Ken",
      "Ryu",
      "Vega",
      "M.Bison",
      "Ken"
    ])
  })

  it("should work when always moving down", function () {
    moves = ["down", "down", "down", "down"]
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), ["Ken", "Ken", "Ken", "Ken"])
  })

  it("should work when always moving up", function () {
    moves = ["up", "up", "up", "up"]
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), ["Ryu", "Ryu", "Ryu", "Ryu"])
  })

  it("should work", function () {
    moves = [
      "right",
      "right",
      "right",
      "right",
      "right",
      "down",
      "left",
      "down",
      "down",
      "up",
      "down",
      "up",
      "left",
      "right",
      "right",
      "up"
    ]
    const exp = [
      "E.Honda",
      "Blanka",
      "Guile",
      "Balrog",
      "Vega",
      "M.Bison",
      "Sagat",
      "Sagat",
      "Sagat",
      "Balrog",
      "Sagat",
      "Balrog",
      "Guile",
      "Balrog",
      "Vega",
      "Vega"
    ]
    console.log(exp)
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), exp)
  })

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  function mystreetFighterSelection(fighters, position, moves) {
    let res = []
    for (let i = 0; i < moves.length; i++) {
      if (moves[i] == "up") {
        position = [Math.max(0, position[0] - 1), position[1]]
      }
      if (moves[i] == "down") {
        position = [Math.min(1, position[0] + 1), position[1]]
      }
      if (moves[i] == "left") {
        position = [position[0], (position[1] - 1 + fighters[position[0]].length) % fighters[position[0]].length]
      }
      if (moves[i] == "right") {
        position = [position[0], (position[1] + 1 + fighters[position[0]].length) % fighters[position[0]].length]
      }
      res.push(fighters[position[0]][position[1]])
    }
    return res
  }

  it("should test for Random values", function () {
    const fighters2 = fighters.slice()
    for (let i = 0; i < 50; i++) {
      let lenmoves = randomInt(3, 50)
      let moves2 = []
      for (let j = 0; j < lenmoves; j++) {
        moves2.push(opts[randomInt(0, 3)])
      }
      const x = randomInt(0, 1)
      let position = [x, randomInt(0, fighters[x].length - 1)]
      const exp = mystreetFighterSelection(fighters, position, moves2)
      console.log(moves2)
      console.log(exp)
      assert.deepEqual(streetFighterSelection(fighters2, position, moves2), exp)
    }
  })
})
