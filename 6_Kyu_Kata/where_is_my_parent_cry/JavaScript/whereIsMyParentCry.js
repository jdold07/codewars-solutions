// 6 kyu - Where is my parent!?(cry)  [ ID: 58539230879867a8cd00011c  (where-is-my-parent-cry) ]
// URL: https://www.codewars.com/kata/58539230879867a8cd00011c
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const findChildren = (s) =>
  [...s.toLowerCase()]
    .sort()
    .join("")
    .replace(/(\w)(\1+)/g, (_, $1, $2) => $1.toUpperCase() + $2)
