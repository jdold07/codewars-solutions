// 7 kyu - Inspiring Strings  [ ID: 5939ab6eed348a945f0007b2  (inspiring-strings) ]
// URL: https://www.codewars.com/kata/5939ab6eed348a945f0007b2
// Category: undefined  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const longestWord = (s) => s.split(" ").reduce((a, c) => (a.length <= c.length ? c : a))
