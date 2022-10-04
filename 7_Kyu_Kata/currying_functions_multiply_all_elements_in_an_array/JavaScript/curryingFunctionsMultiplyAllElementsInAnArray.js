// 7 kyu - Currying functions: multiply all elements in an array  [ ID: 586909e4c66d18dd1800009b  (currying-functions-multiply-all-elements-in-an-array) ]
// URL: https://www.codewars.com/kata/586909e4c66d18dd1800009b
// Category: undefined  |  Tags: FUNCTIONAL PROGRAMMING | FUNDAMENTALS
// *****************************************************************************
const multiplyAll = (arr) => (m) => [...arr].map(el => el * m)
