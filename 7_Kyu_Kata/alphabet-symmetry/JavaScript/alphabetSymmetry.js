// [object Object] - Alphabet symmetry  [ ID: 59d9ff9f7905dfeed50000b0  (alphabet-symmetry) ]
// URL: https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const solve = (arr) =>
    arr.map((v) => [...v].reduce((a, c, i) => a + (++i === c.toUpperCase().charCodeAt() - 64 ? 1 : 0), 0))
