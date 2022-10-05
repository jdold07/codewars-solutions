// 7 kyu - Maximum Product   [ ID: 5a4138acf28b82aa43000117  (maximum-product) ]
// URL: https://www.codewars.com/kata/5a4138acf28b82aa43000117
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
const adjacentElementsProduct = (array) =>
  array.reduce((a, b, i) => (a = a < b * array[i + 1] ? b * array[i + 1] : a), -Infinity)
