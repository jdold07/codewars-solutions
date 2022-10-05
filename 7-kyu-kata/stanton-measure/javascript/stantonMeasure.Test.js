// 7 kyu - Stanton measure  [ ID: 59a1cdde9f922b83ee00003b  (stanton-measure) ]
// URL: https://www.codewars.com/kata/59a1cdde9f922b83ee00003b
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Tests", () => {
  it("test", () => {
    "use strict"

    let b = []
    let arr = () => {
      for (let i = 0; i < Math.floor(Math.random() * 100) + 1; i++) {
        var e = Math.floor(Math.random() * 15) + 1
        e *= Math.floor(Math.random() * 2) == 1 ? 1 : -1
        let g = ~~(1 + Math.random())
        b.push(e)
        b.push(g)
      }
    }

    function sM(a) {
      return !a.some((e) => e === 1) ? 0 : a.filter((e) => e === a.filter((e) => e === 1).length).length
    }

    //generate random portion and starting position and array

    for (let i = 0; i < 200; i++) {
      arr()
      assert.deepEqual(stantonMeasure(b), sM(b), `Testing for ${JSON.stringify(b)}`)
      b = []
    }
    assert.deepEqual(stantonMeasure([]), 0)
  })
})
