// 8 kyu - Calculate average   [ ID: 57a2013acf1fa5bfc4000921  (calculate-average) ]
// URL: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
// Category: REFERENCE  |  Tags: FUNDAMENTALS | FUNCTIONAL PROGRAMMING
// *****************************************************************************
function find_average(array) {
  return array.length ? array.reduce((a, b) => a + b) / array.length : 0
}
