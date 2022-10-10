/* eslint-disable no-undef */
//+ ====================================================================================================================
//+
//+ 7 kyu - Find the nth Digit of a Number  [ ID: 577b9960df78c19bca00007e ] (find-the-nth-digit-of-a-number)
//+ URL: https://www.codewars.com/kata/577b9960df78c19bca00007e
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const findDigit = (num, nth) => (nth < 1 ? -1 : nth > (x = "" + Math.abs(num)).length ? 0 : +x.substr(-nth, 1))

//+ ====================================================================================================================
//+ ====================================================================================================================

const findDigit2 = (num, nth) => (nth < 1 ? -1 : +(("" + Math.abs(num)).substr(-nth, 1) || 0))

module.exports = { findDigit, findDigit2 }
