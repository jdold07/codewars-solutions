//+ ====================================================================================================================
//+
//+ 7 kyu - Double Sort  [ ID: 57cc79ec484cf991c900018d ] (double-sort)
//+ URL: https://www.codewars.com/kata/57cc79ec484cf991c900018d
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS | SORTING
//+
//+ ====================================================================================================================

const dbSort = (a) =>
  a
    .filter((v) => "" + v !== v)
    .sort((a, b) => a - b)
    .concat(a.filter((v) => "" + v === v).sort())

module.exports = { dbSort }
