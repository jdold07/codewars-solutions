//+ ====================================================================================================================
//+
//+ 8 kyu - Double Char  [ ID: 56b1f01c247c01db92000076 ] (double-char)
//+ URL: https://www.codewars.com/kata/56b1f01c247c01db92000076
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}

module.exports = { doubleChar }
