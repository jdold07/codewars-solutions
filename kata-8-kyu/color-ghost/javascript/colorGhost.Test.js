//+ ====================================================================================================================
//+
//+ 8 kyu - Color Ghost  [ ID: 53f1015fa9fe02cbda00111a ] (color-ghost)
//+ URL: https://www.codewars.com/kata/53f1015fa9fe02cbda00111a
//+ Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { Ghost } = require("./colorGhost")

describe("Ghost", function () {
  const ghostColors = []
  for (let i = 1; i <= 100; i++) {
    ghostColors.push(new Ghost().color)
  }

  let ghostColor = function (ghostColors, color) {
    let answer
    for (let i = 0; i < ghostColors.length; i++) {
      if (ghostColors[i] == color) {
        answer = true
        break
      }
    }
    return answer
  }

  it("should sometimes make white ghosts", function () {
    assert.strictEqual(ghostColor(ghostColors, "white"), true)
  })

  it("should sometimes make yellow ghosts", function () {
    assert.strictEqual(ghostColor(ghostColors, "yellow"), true)
  })

  it("should sometimes make purple ghosts", function () {
    assert.strictEqual(ghostColor(ghostColors, "purple"), true)
  })

  it("should sometimes make red ghosts", function () {
    assert.strictEqual(ghostColor(ghostColors, "red"), true)
  })
})
