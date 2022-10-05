// 7 kyu - Automorphic Number (Special Numbers Series  #6)  [ ID: 5a58d889880385c2f40000aa  (automorphic-number-special-numbers-series-number-6) ]
// URL: https://www.codewars.com/kata/5a58d889880385c2f40000aa
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
const automorphic = (n) => n == (n ** 2 + "").slice(-Math.ceil(Math.log10(n + 1))) ? "Automorphic" : "Not!!"
