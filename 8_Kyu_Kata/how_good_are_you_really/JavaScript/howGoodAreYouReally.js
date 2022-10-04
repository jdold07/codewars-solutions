// 8 kyu - How good are you really?  [ ID: 5601409514fc93442500010b  (how-good-are-you-really) ]
// URL: https://www.codewars.com/kata/5601409514fc93442500010b
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const betterThanAverage = (classPoints, yourPoints) =>
  yourPoints > (classPoints.reduce((a, b) => a + b) + yourPoints) / (classPoints.length + 1)
