//+ ====================================================================================================================
//+
//+ 8 kyu - Is there a vowel in there?  [ ID: 57cff961eca260b71900008f ] (is-there-a-vowel-in-there)
//+ URL: https://www.codewars.com/kata/57cff961eca260b71900008f
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
//+
//+ ====================================================================================================================

const isVow = (a) => a.map((v) => ({ 97: "a", 101: "e", 105: "i", 111: "o", 117: "u" }[v] || v))

module.exports = { isVow }
