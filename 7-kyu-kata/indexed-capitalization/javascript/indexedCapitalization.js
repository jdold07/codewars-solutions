// 7 kyu - Indexed capitalization  [ ID: 59cfc09a86a6fdf6df0000f1  (indexed-capitalization) ]
// URL: https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const capitalize = (s,arr) => [...s].reduce((a,c,i) => a + (arr.includes(i) ? c.toUpperCase() : c), "")
