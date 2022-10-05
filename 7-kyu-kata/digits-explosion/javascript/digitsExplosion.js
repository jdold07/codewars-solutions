// 7 kyu - Digits explosion  [ ID: 585b1fafe08bae9988000314  (digits-explosion) ]
// URL: https://www.codewars.com/kata/585b1fafe08bae9988000314
// Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
// *****************************************************************************
const explode = (s) => [...s].reduce((a, c) => a + c.repeat(+c), "")
