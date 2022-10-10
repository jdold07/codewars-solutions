//+ ====================================================================================================================
//+
//+ 7 kyu - shorter concat [reverse longer]  [ ID: 54557d61126a00423b000a45 ] (shorter-concat-reverse-longer)
//+ URL: https://www.codewars.com/kata/54557d61126a00423b000a45
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const shorter_reverse_longer = (a, b) =>
  a.length >= b.length ? b + [...a].reverse().join("") + b : a + [...b].reverse().join("") + a

module.exports = { shorter_reverse_longer }
