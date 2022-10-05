// 8 kyu - Compare within margin  [ ID: 56453a12fcee9a6c4700009c  (compare-within-margin) ]
// URL: https://www.codewars.com/kata/56453a12fcee9a6c4700009c
// Category: REFERENCE  |  Tags: FUNDAMENTALS | LOGIC
// *****************************************************************************
const closeCompare = (a, b, margin = 0) => (Math.abs(a - b) <= margin ? 0 : a < b ? -1 : 1)
