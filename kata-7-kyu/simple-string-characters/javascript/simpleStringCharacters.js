//+ ====================================================================================================================
//+
//+ 7 kyu - Simple string characters  [ ID: 5a29a0898f27f2d9c9000058 ] (simple-string-characters)
//+ URL: https://www.codewars.com/kata/5a29a0898f27f2d9c9000058
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const solve = (s) => [/[A-Z]/g, /[a-z]/g, /\d/g, /\W/g].map((el) => (s.match(el) || []).length)

module.exports = { solve }
