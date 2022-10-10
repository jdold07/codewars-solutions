//+ ====================================================================================================================
//+
//+ 8 kyu - Difference of Volumes of Cuboids  [ ID: 58cb43f4256836ed95000f97 ] (difference-of-volumes-of-cuboids)
//+ URL: https://www.codewars.com/kata/58cb43f4256836ed95000f97
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const findDifference = (x, y) => Math.abs(x.reduce((a, c) => a * c) - y.reduce((a, c) => a * c))

// =====================================================================================================================
// =====================================================================================================================

const findDifference2 = (a, b) => Math.abs(a.reduce((x, y) => x * y) - b.reduce((j, k) => j * k))

module.exports = { findDifference, findDifference2 }
