//+ ====================================================================================================================
//+
//+ 8 kyu - Gravity Flip  [ ID: 5f70c883e10f9e0001c89673 ] (gravity-flip)
//+ URL: https://www.codewars.com/kata/5f70c883e10f9e0001c89673
//+ Category: GAMES  |  Tags: FUNDAMENTALS | PUZZLES
//+
//+ ====================================================================================================================

function flip(d, a) {
  return a.sort((x, y) => (d === "R" ? x - y : y - x))
}

module.exports = { flip }
