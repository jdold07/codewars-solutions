//+ ====================================================================================================================
//+
//+ 8 kyu - Count by X  [ ID: 5513795bd3fafb56c200049e ] (count-by-x)
//+ URL: https://www.codewars.com/kata/5513795bd3fafb56c200049e
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const countBy = (x, n) =>
  new Array(n)
    .fill()
    .map((_, i) => (i + 1) * x)

module.exports = { countBy }
