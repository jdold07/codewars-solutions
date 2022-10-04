// 8 kyu - Sum of positive  [ ID: 5715eaedb436cf5606000381  (sum-of-positive) ]
// URL: https://www.codewars.com/kata/5715eaedb436cf5606000381
// Category: undefined  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const positiveSum = (arr) => (!!arr ? arr.filter((v) => v >= 0).reduce((a, b) => a + b, 0) : 0)
