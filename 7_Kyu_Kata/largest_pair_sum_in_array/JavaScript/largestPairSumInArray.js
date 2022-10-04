// 7 kyu - Largest pair sum in array  [ ID: 556196a6091a7e7f58000018  (largest-pair-sum-in-array) ]
// URL: https://www.codewars.com/kata/556196a6091a7e7f58000018
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
function largestPairSum(numbers) {
  if (numbers.length === 2) {
    return numbers.reduce((a, b) => a + b)
  }
  const maxNum = numbers.reduce((a, b) => Math.max(a, b))
  numbers.splice(numbers.indexOf(maxNum), 1)
  return maxNum + numbers.reduce((a, b) => Math.max(a, b))
}
