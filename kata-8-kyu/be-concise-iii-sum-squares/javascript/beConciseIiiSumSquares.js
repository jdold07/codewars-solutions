//+ ====================================================================================================================
//+
//+ 8 kyu - Be Concise III - Sum Squares  [ ID: 56f8fe6a2e6c0dc83b0008a7 ] (be-concise-iii-sum-squares)
//+ URL: https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const sumSquares = (arr) => arr.reduce((a, c) => a + c ** 2, 0)

module.exports = { sumSquares }
