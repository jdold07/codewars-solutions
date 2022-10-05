// 7 kyu - Mumbling  [ ID: 5667e8f4e3f572a8f2000039  (mumbling) ]
// URL: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | PUZZLES
// *****************************************************************************
const accum = s => 
      Array.from(s, (letter, index) => 
      `${letter.toLocaleUpperCase()}${(letter.toLowerCase()).repeat(index)}`).join('-')
