// 8 kyu - Get number from string  [ ID: 57a37f3cbb99449513000cd8  (get-number-from-string) ]
// URL: https://www.codewars.com/kata/57a37f3cbb99449513000cd8
// Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
// *****************************************************************************
const getNumberFromString = (s) => parseInt([...s].filter((el) => Number.isInteger(parseInt(el))).join(""))
// *****************************************************************************
// *****************************************************************************
const getNumberFromString = (s) =>
  parseInt([...s.split(" ").join("")].filter((el) => Number.isInteger(parseInt(el))).join(""))
