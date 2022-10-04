// 7 kyu - Sum of two lowest positive integers  [ ID: 558fc85d8fd1938afb000014  (sum-of-two-lowest-positive-integers) ]
// URL: https://www.codewars.com/kata/558fc85d8fd1938afb000014
// Category: undefined  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
function sumTwoSmallestNumbers(numbers) {
  return numbers.sort((a, b) => a - b)[0] + numbers.sort((a, b) => a - b)[1]
}
