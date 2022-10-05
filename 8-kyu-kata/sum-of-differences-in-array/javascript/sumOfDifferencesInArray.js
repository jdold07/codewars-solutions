// 8 kyu - Sum of differences in array  [ ID: 5b73fe9fb3d9776fbf00009e  (sum-of-differences-in-array) ]
// URL: https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const sumOfDifferences = (arr) => arr.sort((a, c) => c - a).reduce((a, c, i) => a + (c - arr[i + 1] || 0), 0)
