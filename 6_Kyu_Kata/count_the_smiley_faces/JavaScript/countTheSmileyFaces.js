// 6 kyu - Count the smiley faces!  [ ID: 583203e6eb35d7980400002a  (count-the-smiley-faces) ]
// URL: https://www.codewars.com/kata/583203e6eb35d7980400002a
// Category: undefined  |  Tags: REGULAR EXPRESSIONS | FUNDAMENTALS
// *****************************************************************************
const countSmileys = (arr) =>
  arr.toString().match(/([:;][-~]?[D\)])/g) ? arr.toString().match(/([:;][-~]?[D\)])/g).length : 0
