//+ ====================================================================================================================
//+
//+ 7 kyu - Return the first M multiples of N  [ ID: 593c9175933500f33400003e ] (return-the-first-m-multiples-of-n)
//+ URL: https://www.codewars.com/kata/593c9175933500f33400003e
//+ Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const multiples = (m, n) => Array.from({ length: m }, (_, i) => n * (i + 1))

module.exports = { multiples }
