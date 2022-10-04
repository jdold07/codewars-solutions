// 7 kyu - Alternate case  [ ID: 57a62154cf1fa5b25200031e  (alternate-case) ]
// URL: https://www.codewars.com/kata/57a62154cf1fa5b25200031e
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const alternateCase = (s) =>
  s
    .split("")
    .map((char) => (char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase()))
    .join("")
