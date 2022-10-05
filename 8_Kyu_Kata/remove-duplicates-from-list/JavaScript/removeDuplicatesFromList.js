// [object Object] - Remove duplicates from list  [ ID: 57a5b0dfcf1fa526bb000118  (remove-duplicates-from-list) ]
// URL: https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const distinct = (v) => v.reduce((a, c) => (a.includes(c) ? a : [...a, c]), [])
