// 6 kyu - Count letters in string  [ ID: 5808ff71c7cfa1c6aa00006d  (count-letters-in-string) ]
// URL: https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const letterCount = (s) => [...s].reduce((a, c) => ({ ...a, [c]: a[c] + 1 || 1 }), {})
