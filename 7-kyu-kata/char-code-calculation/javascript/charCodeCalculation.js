// 7 kyu - Char Code Calculation  [ ID: 57f75cc397d62fc93d000059  (char-code-calculation) ]
// URL: https://www.codewars.com/kata/57f75cc397d62fc93d000059
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | STRINGS | MATHEMATICS
// *****************************************************************************
const calc = (x) => [...[...x].map((el) => el.charCodeAt()).join("")].reduce((a, b) => a + (b === "7" ? 6 : 0), 0)
