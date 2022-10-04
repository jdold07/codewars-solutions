// 7 kyu - Shortest Word  [ ID: 57cebe1dc6fdc20c57000ac9  (shortest-word) ]
// URL: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
const findShort = (s) =>
  s
    .split(" ")
    .map((strLength) => strLength.length)
    .sort((a, b) => a - b)[0]
