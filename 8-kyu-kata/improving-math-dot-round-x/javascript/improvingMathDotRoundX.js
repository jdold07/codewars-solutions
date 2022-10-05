// 8 kyu - Improving Math.round(x)  [ ID: 56be025f9347a066c7000e4f  (improving-math-dot-round-x) ]
// URL: https://www.codewars.com/kata/56be025f9347a066c7000e4f
// Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING | MATHEMATICS | LOGIC
// *****************************************************************************
Math.roundTo = function (number, precision) {
  return Math.round(number * (x = 10 ** precision)) / x
}
