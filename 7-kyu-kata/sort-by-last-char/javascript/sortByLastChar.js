// 7 kyu - Sort by Last Char  [ ID: 57eba158e8ca2c8aba0002a0  (sort-by-last-char) ]
// URL: https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS | SORTING
// *****************************************************************************
const last = (x) => x.split(" ").sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
