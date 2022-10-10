//+ ====================================================================================================================
//+
//+ 7 kyu - L2: Triple X  [ ID: 568dc69683322417eb00002c ] (l2-triple-x)
//+ URL: https://www.codewars.com/kata/568dc69683322417eb00002c
//+ Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const tripleX = (str) => /^[^x]*xxx/.test(str)

module.exports = { tripleX }
