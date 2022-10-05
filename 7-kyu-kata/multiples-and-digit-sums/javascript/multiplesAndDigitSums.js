// 7 kyu - Multiples and Digit Sums  [ ID: 58ca77b9c0d640ecd2000b1e  (multiples-and-digit-sums) ]
// URL: https://www.codewars.com/kata/58ca77b9c0d640ecd2000b1e
// Category: ALGORITHMS  |  Tags: ALGORITHMS
// *****************************************************************************
const procedure = (n, sum = 0, m = 1) =>
  n * m > 100
    ? sum
    : procedure(
        n,
        [...("" + n * m)].reduce((a, c) => a + +c, sum),
        ++m
      )
// *****************************************************************************
// *****************************************************************************
const procedure = (n) =>
  [...Array(101).keys()].slice(n).reduce((a, c) => (!(c % n) ? a + [...("" + c)].reduce((x, y) => x + +y, 0) : a), 0)
