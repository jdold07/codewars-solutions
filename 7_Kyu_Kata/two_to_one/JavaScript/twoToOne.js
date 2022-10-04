// 7 kyu - Two to One  [ ID: 5656b6906de340bd1b0000ac  (two-to-one) ]
// URL: https://www.codewars.com/kata/5656b6906de340bd1b0000ac
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const longest = (s1, s2) => [...new Set((s1 + s2).split(""))].sort().join("")
