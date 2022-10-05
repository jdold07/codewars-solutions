// [object Object] - Maze Runner  [ ID: 58663693b359c4a6560001d6  (maze-runner) ]
// URL: https://www.codewars.com/kata/58663693b359c4a6560001d6
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const mazeRunner = (maze, directions) => {
    const dirMap = { N: [0, -1], S: [0, 1], W: [-1, 0], E: [1, 0] }
    const mazeMap = new Map(maze.reduce((a, c, i) => a.concat(c.map((v2, i2) => [`${i2},${i}`, v2])), []))
    const findStart = () => {
      for ([k, v] of mazeMap) {
        if (v === 2) return k.split(",").map((v) => +v)
      }
    }
    let [x, y] = findStart()
  
    for (step of directions) {
      ;[x, y] = [(x += dirMap[step][0]), (y += dirMap[step][1])]
      if (mazeMap.get(`${x},${y}`) === undefined || mazeMap.get(`${x},${y}`) === 1) return "Dead"
      if (mazeMap.get(`${x},${y}`) === 3) return "Finish"
    }
    return "Lost"
  }
