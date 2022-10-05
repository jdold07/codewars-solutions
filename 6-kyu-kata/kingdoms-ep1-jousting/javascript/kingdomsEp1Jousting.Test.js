// 6 kyu - Kingdoms Ep1: Jousting  [ ID: 6138ee916cb50f00227648d9  (kingdoms-ep1-jousting) ]
// URL: https://www.codewars.com/kata/6138ee916cb50f00227648d9
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
const chai = require("chai")
const deepEqual = chai.assert.deepEqual
chai.config.truncateThreshold = 0

function doTest(field, vKnightLeft, vKnightRight, expected) {
  const log = `for vKnightLeft = ${vKnightLeft}, vKnightRight = ${vKnightRight} and field:\n${JSON.stringify(field)}\n`
  const actual = joust(field, vKnightLeft, vKnightRight)
  deepEqual(actual, expected, log)
}

describe("Tests suite", function () {
  it("Sample jousting", function () {
    doTest(["$->    ", "    <-P"], 1, 1, [" $->   ", "   <-P "])
    doTest(["$->     ", "     <-P"], 1, 1, ["  $->   ", "   <-P  "])
    doTest(["$->              ", "              <-P"], 1, 1, ["      $->        ", "        <-P      "])
  })

  it("Sample jousting with different velocity", function () {
    doTest(["$->    ", "    <-P"], 3, 3, ["   $-> ", " <-P   "])
    doTest(["$->   ", "   <-P"], 3, 3, ["   $->", "<-P   "])
    doTest(["$->     ", "     <-P"], 0, 2, ["$->     ", " <-P    "])
    doTest(["$->              ", "              <-P"], 2, 3, ["      $->        ", "     <-P         "])
  })

  it("Immediate battle", function () {
    doTest(["$->  ", "  <-P"], 3, 3, ["$->  ", "  <-P"])
    doTest(["$->", "<-P"], 3, 3, ["$->", "<-P"])
    doTest(["$-> ", " <-P"], 0, 0, ["$-> ", " <-P"])
  })

  it("Knights refused to fight", function () {
    doTest(["$->    ", "    <-P"], 0, 0, ["$->    ", "    <-P"])
  })

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
  }

  function createTest(i) {
    return {
      listField: ["$->" + " ".repeat(i), " ".repeat(i) + "<-P"],
      vKnightLeft: getRandomInt(0, 4),
      vKnightRight: getRandomInt(0, 4)
    }
  }

  function mySolution(listField, vKnightLeft, vKnightRight) {
    if (!vKnightLeft && !vKnightRight) {
      return listField
    }
    let leftPoint = 2
    let rightPoint = listField[0].length - 3

    while (leftPoint < rightPoint) {
      leftPoint += vKnightLeft
      rightPoint -= vKnightRight
    }

    let line1 = " ".repeat(leftPoint - 2) + "$->" + " ".repeat(listField[0].length - leftPoint - 1)

    let line2 = " ".repeat(rightPoint) + "<-P" + " ".repeat(listField[1].length - rightPoint - 3)

    return [line1, line2]
  }

  it("random tests", function () {
    for (let i = 0; i < 100; i++) {
      const { listField, vKnightLeft, vKnightRight } = createTest(getRandomInt(0, 100))
      const expected = mySolution(listField.slice(), vKnightLeft, vKnightRight)
      doTest(listField, vKnightLeft, vKnightRight, expected)
    }
  })
})
