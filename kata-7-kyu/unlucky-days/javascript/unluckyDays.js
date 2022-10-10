//+ ====================================================================================================================
//+
//+ 7 kyu - Unlucky Days  [ ID: 56eb0be52caf798c630013c0 ] (unlucky-days)
//+ URL: https://www.codewars.com/kata/56eb0be52caf798c630013c0
//+ Category: REFERENCE  |  Tags: DATE TIME | FUNDAMENTALS
//+
//+ ====================================================================================================================

const unluckyDays = (year) => [...Array(12).keys()].reduce((a, c) => a + (new Date(year, c, 13).getDay() === 5), 0)

module.exports = { unluckyDays }
