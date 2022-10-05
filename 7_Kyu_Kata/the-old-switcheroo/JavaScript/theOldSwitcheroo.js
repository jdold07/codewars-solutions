// [object Object] - The old switcheroo  [ ID: 55d410c492e6ed767000004f  (the-old-switcheroo) ]
// URL: https://www.codewars.com/kata/55d410c492e6ed767000004f
// Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
// *****************************************************************************
const vowel2index = (str) => [...str].reduce((a, c, i) => a + (c.replace(/[aeiou]/gi, i + 1) || c), "")
