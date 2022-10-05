// [object Object] - Pythagorean Triple  [ ID: 5951d30ce99cf2467e000013  (pythagorean-triple) ]
// URL: https://www.codewars.com/kata/5951d30ce99cf2467e000013
// Category: REFERENCE  |  Tags: ALGEBRA | MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
const isPythagoreanTriple = (integers) => (x = integers.sort((a, b) => b - a))[0] ** 2 === x[1] ** 2 + x[2] ** 2
