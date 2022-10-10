//+ ====================================================================================================================
//+
//+ 7 kyu - Drying Potatoes  [ ID: 58ce8725c835848ad6000007 ] (drying-potatoes)
//+ URL: https://www.codewars.com/kata/58ce8725c835848ad6000007
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | PUZZLES
//+
//+ ====================================================================================================================

function potatoes(p0, w0, p1) {
  return Math.floor((w0 * (100 - p0)) / (100 - p1))
}

module.exports = { potatoes }
