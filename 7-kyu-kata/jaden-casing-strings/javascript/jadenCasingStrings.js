// 7 kyu - Jaden Casing Strings  [ ID: 5390bac347d09b7da40006f6  (jaden-casing-strings) ]
// URL: https://www.codewars.com/kata/5390bac347d09b7da40006f6
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
String.prototype.toJadenCase = function () {
  let result = this

  if (this.length !== 0) {
    result = this.split(" ")
      .map(function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1)
      })
      .join(" ")
  }

  return result
}
