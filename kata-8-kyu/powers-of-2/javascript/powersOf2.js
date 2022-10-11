//+ ====================================================================================================================
//+
//+ 8 kyu - Powers of 2  [ ID: 57a083a57cb1f31db7000028 ] (powers-of-2)
//+ URL: https://www.codewars.com/kata/57a083a57cb1f31db7000028
//+ Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function powersOfTwo(n) {
  return Array.from({ length: n + 1 }, (_, i) => 2 ** i)
}

module.exports = { powersOfTwo }
