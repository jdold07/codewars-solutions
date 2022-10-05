// 8 kyu - Remove First and Last Character Part Two  [ ID: 570597e258b58f6edc00230d  (remove-first-and-last-character-part-two) ]
// URL: https://www.codewars.com/kata/570597e258b58f6edc00230d
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS | STRINGS
// *****************************************************************************
const array = (arr) => (arr.split(",").length < 3 ? null : arr.split(",").slice(1, -1).join(" "))
