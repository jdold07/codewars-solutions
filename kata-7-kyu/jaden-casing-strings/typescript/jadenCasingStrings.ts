//+ ====================================================================================================================
//+
//+ 7 kyu - Jaden Casing Strings  [ ID: 5390bac347d09b7da40006f6 ] (jaden-casing-strings)
//+ URL: https://www.codewars.com/kata/5390bac347d09b7da40006f6
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

String.prototype.toJadenCase = function () {
  return this.replace(/\b(?<!')\w/g, (v) => v.toUpperCase())
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface String {
  toJadenCase(): string
}

module.exports = String
