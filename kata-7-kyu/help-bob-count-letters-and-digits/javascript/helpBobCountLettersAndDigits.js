/* eslint-disable no-cond-assign */
/* eslint-disable no-undef */
//+ ====================================================================================================================
//+
//+ 7 kyu - Help Bob count letters and digits.  [ ID: 5738f5ea9545204cec000155 ] (help-bob-count-letters-and-digits)
//+ URL: https://www.codewars.com/kata/5738f5ea9545204cec000155
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const countLettersAndDigits = (input) => ((x = input.match(/[a-z\d]/gi)) ? x.length : 0)

module.exports = { countLettersAndDigits }
