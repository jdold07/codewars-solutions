//+ ====================================================================================================================
//+
//+ 7 kyu - Changing letters  [ ID: 5831c204a31721e2ae000294 ] (changing-letters)
//+ URL: https://www.codewars.com/kata/5831c204a31721e2ae000294
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

function swap(string) {
  return string.replace(/[aeiou]/g, (v) => v.toUpperCase())
}

module.exports = { swap }
