// 8 kyu - Find Multiples of a Number  [ ID: 58ca658cc0d6401f2700045f  (find-multiples-of-a-number) ]
// URL: https://www.codewars.com/kata/58ca658cc0d6401f2700045f
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const findMultiples = (n, limit) => Array.from({ length: Math.floor(limit / n) }, (_, i) => n * (i + 1))
// *****************************************************************************
// *****************************************************************************
const findMultiples = (n, limit, res = [], m = 1) => (n * m > limit ? res : findMultiples(n, limit, res.concat(n * m), ++m))
