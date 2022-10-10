//+ ====================================================================================================================
//+
//+ 7 kyu - Sum of integers in string  [ ID: 598f76a44f613e0e0b000026 ] (sum-of-integers-in-string)
//+ URL: https://www.codewars.com/kata/598f76a44f613e0e0b000026
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const sumOfIntegersInString = (s) => s.split(/\D/).reduce((a, c) => a + +c, 0)

module.exports = { sumOfIntegersInString }
