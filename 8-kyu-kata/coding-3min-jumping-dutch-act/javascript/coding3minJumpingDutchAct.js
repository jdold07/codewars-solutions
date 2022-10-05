// 8 kyu - Coding 3min : Jumping Dutch act  [ ID: 570bcd9715944a2c8e000009  (coding-3min-jumping-dutch-act) ]
// URL: https://www.codewars.com/kata/570bcd9715944a2c8e000009
// Category: GAMES  |  Tags: PUZZLES | GAMES
// *****************************************************************************
function sc(floor) {
  let falling = "Aa~ "
  if (floor <= 1) return ""
  if (floor > 1 && floor < 7) return falling.repeat(floor - 1) + "Pa! Aa!"
  return falling.repeat(floor - 1) + "Pa!"
}
