//+ ====================================================================================================================
//+
//+ 8 kyu - Enumerable Magic #4 - True for None?  [ ID: 545993ee52756d98ca0010e1 ] (enumerable-magic-number-4-true-for-none)
//+ URL: https://www.codewars.com/kata/545993ee52756d98ca0010e1
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function none(arr, fun) {
  return !arr.filter(fun).length
}

module.exports = { none }
