//+ ====================================================================================================================
//+
//+ 8 kyu - Days in the year  [ ID: 56d6c333c9ae3fc32800070f ] (days-in-the-year)
//+ URL: https://www.codewars.com/kata/56d6c333c9ae3fc32800070f
//+ Category: REFERENCE  |  Tags: DATE TIME | FUNDAMENTALS
//+
//+ ====================================================================================================================

const yearDays = (year) => `${year} has ${!(year % 400) || (year % 100 && !(year % 4)) ? 366 : 365} days`

module.exports = { yearDays }
