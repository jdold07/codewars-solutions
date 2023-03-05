//+ ====================================================================================================================
//+
//+ 4 kyu - Strip Comments  [ ID: 51c8e37cee245da6b40000bd ] (strip-comments)
//+ URL: https://www.codewars.com/kata/51c8e37cee245da6b40000bd
//+ Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

function solution(input, markers) {
  const regex = new RegExp(` {0,}[${markers.join("")}][^\n]{0,}?(?=\\n|$)`, "g")
  return input.replace(regex, "")
}

module.exports = { solution }
