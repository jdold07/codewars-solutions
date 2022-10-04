// 7 kyu - Reverse words  [ ID: 5259b20d6021e9e14c0010d4  (reverse-words) ]
// URL: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
// Category: undefined  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const reverseWords = str => str
    .split(" ")
    .map(el => el
      .split("")
      .reverse()
      .join(""))
    .join(" ")
