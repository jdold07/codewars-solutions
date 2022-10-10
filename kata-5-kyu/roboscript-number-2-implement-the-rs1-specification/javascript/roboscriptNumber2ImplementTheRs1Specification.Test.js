//+ ====================================================================================================================
//+
//+ 5 kyu - RoboScript #2 - Implement the RS1 Specification  [ ID: 5870fa11aa0428da750000da ] (roboscript-number-2-implement-the-rs1-specification)
//+ URL: https://www.codewars.com/kata/5870fa11aa0428da750000da
//+ Category: ALGORITHMS  |  Tags: ESOTERIC LANGUAGES | ALGORITHMS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { execute } = require("./roboscriptNumber2ImplementTheRs1Specification")

describe("Your RS1 Interpreter", function () {
  it("should work for the example tests provided in the description", function () {
    assert.strictEqual(execute(""), "*")
    assert.strictEqual(execute("FFFFF"), "******")
    assert.strictEqual(execute("FFFFFLFFFFFLFFFFFLFFFFFL"), "******\r\n*    *\r\n*    *\r\n*    *\r\n*    *\r\n******")
    assert.strictEqual(
      execute("LFFFFFRFFFRFFFRFFFFFFF"),
      "    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   "
    )
    assert.strictEqual(execute("LF5RF3RF3RF7"), "    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   ")
  })
  it("should work for some fixed tests", function () {
    assert.strictEqual(
      execute("FFFLLFFFFFFRRFFFLFFFRRFFFFFFFF"),
      "   *   \r\n   *   \r\n   *   \r\n*******\r\n   *   \r\n   *   \r\n   *   \r\n   *   \r\n   *   "
    )
    assert.strictEqual(
      execute("F3L2F6R2F3LF3R2F8"),
      "   *   \r\n   *   \r\n   *   \r\n*******\r\n   *   \r\n   *   \r\n   *   \r\n   *   \r\n   *   "
    )
    assert.strictEqual(
      execute("F2FLLF3F3R2FFFLF2FRRF3F2F2F"),
      "   *   \r\n   *   \r\n   *   \r\n*******\r\n   *   \r\n   *   \r\n   *   \r\n   *   \r\n   *   "
    )
    assert.strictEqual(
      execute("FFLFFFLFFFFLFFFFFLFFFFFFLFFFFFFFLFFFFFFFFLFFFFFFFFFLFFFFFFFFFF"),
      "*********  \r\n*       *  \r\n* ***** *  \r\n* *   * *  \r\n* *   * *  \r\n* * *** *  \r\n* *     *  \r\n* *******  \r\n*          \r\n***********"
    )
    assert.strictEqual(
      execute("F2LF3LF4LF5LF6LF7LF8LF9LF10"),
      "*********  \r\n*       *  \r\n* ***** *  \r\n* *   * *  \r\n* *   * *  \r\n* * *** *  \r\n* *     *  \r\n* *******  \r\n*          \r\n***********"
    )
    assert.strictEqual(
      execute("FFFFLFFFFRFFFFRFFFFLFFFFLFFFFRFFFFRFFFFLFFFFLFFFFRFFFFRFFFF"),
      "    *****   *****   *****\r\n    *   *   *   *   *   *\r\n    *   *   *   *   *   *\r\n    *   *   *   *   *   *\r\n*****   *****   *****   *"
    )
    assert.strictEqual(
      execute("F4LF4RF4RF4LF4LF4RF4RF4LF4LF4RF4RF4"),
      "    *****   *****   *****\r\n    *   *   *   *   *   *\r\n    *   *   *   *   *   *\r\n    *   *   *   *   *   *\r\n*****   *****   *****   *"
    )
  })
  it("should work for valid randomly generated RS1 programs", function () {
    function solution(c) {
      let code = c.replace(/[FLR]\d+/g, (s) => s[0].repeat(parseInt(s.slice(1))))
      let directions = ["right", "down", "left", "up"]
      let directionIndex = 0
      let grid = [[0]]
      let robot = { x: 0, y: 0 }
      grid[robot.y][robot.x] = 1
      for (let i = 0; i < code.length; i++) {
        switch (code[i]) {
          case "R":
            directionIndex = (directionIndex + 1) % 4
            break
          case "L":
            directionIndex = (directionIndex + 3) % 4
            break
          case "F":
            switch (directions[directionIndex]) {
              case "right":
                robot.x++
                if (robot.x >= grid[robot.y].length) {
                  for (let k = 0; k < grid.length; k++) grid[k].push(0)
                }
                break
              case "down":
                robot.y++
                if (robot.y >= grid.length) grid.push(Array(grid[0].length).fill(0))
                break
              case "left":
                robot.x--
                if (robot.x < 0) {
                  for (let k = 0; k < grid.length; k++) grid[k] = [0].concat(grid[k])
                  robot.x++
                }
                break
              case "up":
                robot.y--
                if (robot.y < 0) {
                  grid = [Array(grid[0].length).fill(0)].concat(grid)
                  robot.y++
                }
                break
            }
            grid[robot.y][robot.x] = 1
            break
        }
      }
      return grid.map((r) => r.map((s) => (s === 1 ? "*" : " ")).join("")).join("\r\n")
    }
    function randomProgram() {
      return Array(100)
        .fill(0)
        .map(
          () =>
            [
              "F",
              "L",
              "R",
              "F" + (1 + ~~(Math.random() * 100)),
              "L" + (1 + ~~(Math.random() * 100)),
              "R" + (1 + ~~(Math.random() * 100))
            ][~~(Math.random() * 6)]
        )
        .join("")
    }
    for (let i = 0; i < 10; i++) {
      let c = randomProgram()
      let expected = solution(c)
      let actual = execute(c)
      assert.strictEqual(actual, expected)
    }
  })
})
