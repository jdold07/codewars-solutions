// 7 kyu - String ends with?  [ ID: 51f2d1cafc9c0f745c00037d  (string-ends-with) ]
// URL: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
// Category: undefined  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
function solution(str, ending) {
  ending = ending.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  return new RegExp(`${ending}$`).test(str)
}
