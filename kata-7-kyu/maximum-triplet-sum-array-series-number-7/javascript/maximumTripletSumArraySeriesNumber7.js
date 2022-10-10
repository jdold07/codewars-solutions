//+ ====================================================================================================================
//+
//+ 7 kyu - Maximum Triplet Sum (Array Series #7)   [ ID: 5aa1bcda373c2eb596000112 ] (maximum-triplet-sum-array-series-number-7)
//+ URL: https://www.codewars.com/kata/5aa1bcda373c2eb596000112
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

const maxTriSum = (numbers) =>
  [...new Set(numbers)]
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b)

module.exports = { maxTriSum }
