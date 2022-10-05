// 6 kyu - Maze Runner  [ ID: 58663693b359c4a6560001d6  (maze-runner) ]
// URL: https://www.codewars.com/kata/58663693b359c4a6560001d6
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
    const mazeMap = [
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 2, 1]
    ]

    Test.assertEquals(
      mazeRunner(mazeMap, [
        "N",
        "N",
        "N",
        "W",
        "W",
        "W",
        "N",
        "N",
        "W",
        "W",
        "S",
        "S",
        "S",
        "S",
        "W",
        "W",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N"
      ]),
      "Finish",
      "Should return Finish"
    )
    Test.assertEquals(
      mazeRunner(mazeMap, ["N", "N", "N", "N", "N", "N", "N", "N", "W", "W", "W", "S", "W", "W", "N"]),
      "Lost",
      "Should return Lost"
    )
    Test.assertEquals(
      mazeRunner(mazeMap, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"]),
      "Dead",
      "Should return Dead"
    )
    Test.assertEquals(mazeRunner(mazeMap, ["N", "W", "W", "W", "W"]), "Dead", "Should return Dead")
    Test.assertEquals(
      mazeRunner(mazeMap, ["N", "N", "N", "N", "N", "N", "N", "N", "N", "S", "S", "S", "S", "S", "S", "S", "S", "S"]),
      "Lost",
      "Should return Lost"
    )
    Test.assertEquals(mazeRunner(mazeMap, ["N", "E", "E"]), "Dead", "Should return Dead")
    Test.assertEquals(
      mazeRunner(mazeMap, [
        "N",
        "W",
        "W",
        "W",
        "N",
        "N",
        "N",
        "N",
        "W",
        "W",
        "S",
        "S",
        "S",
        "S",
        "W",
        "W",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "S",
        "S"
      ]),
      "Finish",
      "Should return Finish"
    )
    Test.assertEquals(mazeRunner(mazeMap, ["N", "W", "W", "W", "N", "N"]), "Lost", "Should return Lost")
    Test.assertEquals(mazeRunner(mazeMap, ["N", "N", "N", "E"]), "Lost", "Should return Lost")
    Test.assertEquals(
      mazeRunner(mazeMap, ["N", "N", "N", "W", "W", "W", "N", "N", "W", "W", "S", "S", "S", "S", "S", "S"]),
      "Dead",
      "Should return Dead"
    )
    Test.assertEquals(
      mazeRunner(mazeMap, [
        "N",
        "W",
        "W",
        "W",
        "N",
        "N",
        "N",
        "N",
        "W",
        "W",
        "S",
        "S",
        "S",
        "S",
        "W",
        "W",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N"
      ]),
      "Finish",
      "Should return Finish"
    )

    function mazeRunner2(maze, directions) {
      let startX = 0
      let startY = 0
      let boardX = 0
      let boardY = 0
      for (y = 0; y < maze.length; y++) {
        boardY = maze[y]
        for (x = 0; x < boardY.length; x++) {
          boardX = boardY[x]
          if (boardX === 2) {
            startX = x
            startY = y
          }
        }
      }

      for (x = 0; x < directions.length; x++) {
        switch (directions[x]) {
          case "N":
            startY -= 1
            break
          case "E":
            startX += 1
            break
          case "S":
            startY += 1
            break
          case "W":
            startX -= 1
            break
        }
        if (startY < 0 || startY > maze.length - 1 || startX < 0 || startX > maze.length - 1 || maze[startY][startX] === 1) {
          return "Dead"
        }
        if (maze[startY][startX] === 3) {
          return "Finish"
        }
      }
      return "Lost"
    }

    function runTests() {
      for (tests = 1; tests < 100; tests++) {
        var directions = []
        var maze = []
        const l = Math.floor(Math.random() * 60) + 5
        for (let x = 1; x < l; x++) {
          let t = []
          for (y = 1; y < l; y++) {
            t.push(0)
          }
          maze.push(t)
        }
        const w = Math.floor(Math.random() * l * l) + 1
        for (let z = 1; z < w; z++) {
          const x2 = Math.floor(Math.random() * (l - 1))
          const y2 = Math.floor(Math.random() * (l - 1))
          maze[x2][y2] = 1
        }
        const x3 = Math.floor(Math.random() * (l - 1))
        const y3 = Math.floor(Math.random() * (l - 1))
        maze[x3][y3] = 3

        const x4 = Math.floor(Math.random() * (l - 1))
        const y4 = Math.floor(Math.random() * (l - 1))
        maze[x4][y4] = 2

        const m = Math.floor(Math.random() * 59) + 1
        for (let x5 = 0; x5 < m; x5++) {
          const d = Math.floor(Math.random() * 4)
          switch (d) {
            case 0:
              directions.push("N")
              break
            case 1:
              directions.push("E")
              break
            case 2:
              directions.push("S")
              break
            case 3:
              directions.push("W")
              break
          }
        }

        const solution = mazeRunner2(maze, directions)
        Test.assertEquals(mazeRunner(maze, directions), solution, "Expected outcome to be " + solution)
      }
    }

    runTests()
  })
})
