//+ ====================================================================================================================
//+
//+ 8 kyu - Sum of Multiples  [ ID: 57241e0f440cd279b5000829 ] (sum-of-multiples)
//+ URL: https://www.codewars.com/kata/57241e0f440cd279b5000829
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function sumMul(n, m) {
  if (n >= m) return "INVALID"
  const multiples = Math.floor((m - 1) / n)
  return ((multiples * (multiples + 1)) / 2) * n
}


module.exports = { sumMul }
