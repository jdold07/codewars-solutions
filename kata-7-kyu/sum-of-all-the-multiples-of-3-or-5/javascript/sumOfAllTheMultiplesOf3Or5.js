//+ ====================================================================================================================
//+
//+ 7 kyu - Sum of all the multiples of 3 or 5  [ ID: 57f36495c0bb25ecf50000e7 ] (sum-of-all-the-multiples-of-3-or-5)
//+ URL: https://www.codewars.com/kata/57f36495c0bb25ecf50000e7
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const findSum = (n) =>
  new Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .filter((el) => el % 3 === 0 || el % 5 === 0)
    .reduce((a, b) => a + b, 0)

module.exports = { findSum }
