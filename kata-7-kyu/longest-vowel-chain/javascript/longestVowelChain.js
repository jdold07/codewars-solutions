//+ ====================================================================================================================
//+
//+ 7 kyu - Longest vowel chain  [ ID: 59c5f4e9d751df43cf000035 ] (longest-vowel-chain)
//+ URL: https://www.codewars.com/kata/59c5f4e9d751df43cf000035
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const solve = (s) => s.split(/[^aeiou]/).reduce((a, c) => (c.length > a ? (a = c.length) : a), 0)

module.exports = { solve }
