// 6 kyu - Street Fighter 2 - Character Selection  [ ID: 5853213063adbd1b9b0000be  (street-fighter-2-character-selection) ]
// URL: https://www.codewars.com/kata/5853213063adbd1b9b0000be
// Category: undefined  |  Tags: ARRAYS | LISTS | FUNDAMENTALS | GRAPH THEORY
// *****************************************************************************
const streetFighterSelection = (fighters, position, moves) => {
    const move = (direction) => {
      switch (direction) {
        case "up":
          return position[0] === 0 ? [0, position[1]] : [position[0] - 1, position[1]]
        case "down":
          return position[0] === 1 ? [1, position[1]] : [position[0] + 1, position[1]]
        case "left":
          return position[1] === 0 ? [position[0], 5] : [position[0], position[1] - 1]
        case "right":
          return position[1] === 5 ? [position[0], 0] : [position[0], position[1] + 1]
      }
    }
    return moves.map((el) => (position = move(el))).reduce((a, [y, x]) => [...a, fighters[y][x]], [])
  }
