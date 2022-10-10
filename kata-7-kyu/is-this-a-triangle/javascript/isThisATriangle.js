//+ ====================================================================================================================
//+
//+ 7 kyu - Is this a triangle?  [ ID: 56606694ec01347ce800001b ] (is-this-a-triangle)
//+ URL: https://www.codewars.com/kata/56606694ec01347ce800001b
//+ Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function isTriangle(a, b, c) {
  const arr = [a, b, c].sort((x, y) => x - y)
  return arr[0] + arr[1] > arr[2]
}

module.exports = { isTriangle }
