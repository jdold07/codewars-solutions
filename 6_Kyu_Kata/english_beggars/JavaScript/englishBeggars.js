// 6 kyu - English beggars  [ ID: 59590976838112bfea0000fa  (english-beggars) ]
// URL: https://www.codewars.com/kata/59590976838112bfea0000fa
// Category: undefined  |  Tags: QUEUES | ARRAYS | LISTS | RECURSION | FUNDAMENTALS
// *****************************************************************************
const beggars = (values, n) =>
    [...Array(n)].fill(0).map(function fnC(v, i) {
      v += values[i] || 0
      return i + n > values.length - 1 ? v : fnC(v, i + n)
    })
