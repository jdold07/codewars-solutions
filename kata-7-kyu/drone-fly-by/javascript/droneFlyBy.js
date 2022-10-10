/* eslint-disable no-undef */
//+ ====================================================================================================================
//+
//+ 7 kyu - Drone Fly-By  [ ID: 58356a94f8358058f30004b5 ] (drone-fly-by)
//+ URL: https://www.codewars.com/kata/58356a94f8358058f30004b5
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
//+
//+ ====================================================================================================================

function flyBy(l, d) {
  return l.replace(RegExp("x{" + (x = Math.min(l.length, d.length)) + "}"), "o".repeat(x))
}

module.exports = { flyBy }
