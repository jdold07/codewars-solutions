// 5 kyu - RoboScript #2 - Implement the RS1 Specification  [ ID: 5870fa11aa0428da750000da  (roboscript-number-2-implement-the-rs1-specification) ]
// URL: https://www.codewars.com/kata/5870fa11aa0428da750000da
// Category: ALGORITHMS  |  Tags: ESOTERIC LANGUAGES | ALGORITHMS
// *****************************************************************************
function execute(code) {
  const axis = [1, -1, -1, 1]
  let i = 3
  let [X, Y] = [0, 0]
  const changeDir = (LorR) => (i = LorR === "L" ? (i - 1 === -1 ? 3 : i - 1) : i + 1 === 4 ? 0 : i + 1)

  let coord = code
    .replace(/([FLR])(\d+)/g, (_, $1, $2) => $1.repeat(+$2))
    .split("")
    .map((v) => {
      if (v === "F") {
        if (i % 2) return ([X, Y] = [X + axis[i], Y])
        return ([X, Y] = [X, Y + axis[i]])
      }
      changeDir(v)
      return v
    })
    .filter((v) => v !== "L" && v != "R")
  coord.push([0, 0])

  const [xOffset, yOffset] = [Math.min(...coord.map((v) => v[0])), Math.min(...coord.map((v) => v[1]))]
  coord = coord.map(([x, y]) => [x - xOffset, y - yOffset])
  const [xMax, yMax] = [Math.max(...coord.map((v) => v[0])), Math.max(...coord.map((v) => v[1]))]

  const grid = Array.from({ length: yMax + 1 }, (v) => (v = Array.from({ length: xMax + 1 }, (v) => (v = " "))))
  coord.forEach(([x, y]) => (grid[y][x] = "*"))
  return grid.map((v) => v.join("")).join("\r\n")
}
