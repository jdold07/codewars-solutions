// 8 kyu - Sum without highest and lowest number  [ ID: 576b93db1129fcf2200001e6  (sum-without-highest-and-lowest-number) ]
// URL: https://www.codewars.com/kata/576b93db1129fcf2200001e6
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const sumArray = (array) =>
  !array || array.length < 2 ? 0 : array.reduce((a, b) => a + b, 0) - Math.min(...array) - Math.max(...array)
