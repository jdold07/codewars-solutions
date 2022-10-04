// 8 kyu - Training JS #14: Methods of Number object--toString() and toLocaleString()  [ ID: 57238ceaef9008adc7000603  (training-js-number-14-methods-of-number-object-tostring-and-tolocalestring) ]
// URL: https://www.codewars.com/kata/57238ceaef9008adc7000603
// Category: undefined  |  Tags: FUNDAMENTALS | TUTORIALS
// *****************************************************************************
const colorOf = (r, g, b) =>
  "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0")
