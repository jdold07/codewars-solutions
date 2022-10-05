// 7 kyu - Numbers to Letters  [ ID: 57ebaa8f7b45ef590c00000c  (numbers-to-letters) ]
// URL: https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
// *****************************************************************************
const switcher = (x) => x.reduce((a, c) => a + " ?!abcdefghijklmnopqrstuvwxyz".substr(-c, 1), "")
  
