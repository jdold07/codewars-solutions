//+ ====================================================================================================================
//+
//+ 7 kyu - 'x' marks the spot.  [ ID: 5777fe3f355edbf0a5000d11 ] (x-marks-the-spot-1)
//+ URL: https://www.codewars.com/kata/5777fe3f355edbf0a5000d11
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | MATRIX
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { xMarksTheSpot } = require("./xMarksTheSpot1")

describe("Basic Tests", () => {
  it("Return an empty array if x is an empty array", () => {
    assert.deepEqual(xMarksTheSpot([]), [])
  })
  it("Return an empty array if no x found", () => {
    assert.deepEqual(
      xMarksTheSpot([
        ["o", "o"],
        ["o", "o"]
      ]),
      []
    )
  })
  it("Return an empty array if more than one x found", () => {
    assert.deepEqual(
      xMarksTheSpot([
        ["x", "o"],
        ["o", "x"]
      ]),
      []
    )
  })
  it("Return [0,0] when x at top left", () => {
    assert.deepEqual(
      xMarksTheSpot([
        ["x", "o"],
        ["o", "o"]
      ]),
      [0, 0]
    )
  })
  it("Return [4,6] when x at position [4,6]", () => {
    let input = [
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o", "o", "x", "o"],
      ["o", "o", "o", "o", "o", "o", "o", "o"]
    ]
    assert.deepEqual(xMarksTheSpot(input), [4, 6])
  })
})

describe("Random Tests", () => {
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function generateCase() {
    let rows = rand(2, 16)
    let cols = rand(2, 16)

    let array = Array.from({ length: rows }, () => Array.from({ length: cols }, () => "o"))

    let row = rand(1, rows - 1)
    let col = rand(1, cols - 1)
    array[row][col] = "x"

    return [[row, col], array]
  }

  it("Random tests", () => {
    for (let _ = 0; _ < 50; _++) {
      let [expected, input] = generateCase()
      let str = input.map((r) => r.join("")).join("\n")
      assert.deepEqual(xMarksTheSpot(input), expected, `Test failed for input:\n\n${str}\n\n`)
    }
  })
})
