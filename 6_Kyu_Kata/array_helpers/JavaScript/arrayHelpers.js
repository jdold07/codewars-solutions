// 6 kyu - Array Helpers  [ ID: 525d50d2037b7acd6e000534  (array-helpers) ]
// URL: https://www.codewars.com/kata/525d50d2037b7acd6e000534
// Category: undefined  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
Array.prototype.square = function () {
  return this.map((el) => el ** 2)
}

Array.prototype.cube = function () {
  return this.map((el) => el ** 3)
}

Array.prototype.average = function () {
  return this.reduce((a, c) => a + c, 0) / this.length || NaN
}

Array.prototype.sum = function () {
  return this.reduce((a, c) => a + c, 0)
}

Array.prototype.even = function () {
  return this.filter((el) => !(el % 2))
}

Array.prototype.odd = function () {
  return this.filter((el) => el % 2)
}
