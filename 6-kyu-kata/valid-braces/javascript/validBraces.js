// 6 kyu - Valid Braces  [ ID: 5277c8a221e209d3f6000b56  (valid-braces) ]
// URL: https://www.codewars.com/kata/5277c8a221e209d3f6000b56
// Category: ALGORITHMS  |  Tags: ALGORITHMS
// *****************************************************************************
function validBraces(braces) {
  while (/\[\]|\{\}|\(\)/g.test(braces)) braces = braces.replace(/\[\]|\{\}|\(\)/g, "")
  return braces.length == 0
}
