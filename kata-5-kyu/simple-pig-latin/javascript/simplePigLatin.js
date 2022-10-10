//+ ====================================================================================================================
//+
//+ 5 kyu - Simple Pig Latin  [ ID: 520b9d2ad5c005041100000f ] (simple-pig-latin)
//+ URL: https://www.codewars.com/kata/520b9d2ad5c005041100000f
//+ Category: ALGORITHMS  |  Tags: REGULAR EXPRESSIONS | ALGORITHMS
//+
//+ ====================================================================================================================

function pigIt(str) {
  return str.replace(/\b(\w)(\w*)\b/g, "$2$1ay")
}

module.exports = { pigIt }
