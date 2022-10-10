/* eslint-disable no-undef */
//+ ====================================================================================================================
//+
//+ 5 kyu - First Variation on Caesar Cipher  [ ID: 5508249a98b3234f420000fb ] (first-variation-on-caesar-cipher)
//+ URL: https://www.codewars.com/kata/5508249a98b3234f420000fb
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | CIPHERS | STRINGS
//+
//+ ====================================================================================================================

const abc = "abcdefghijklmnopqrstuvwxyz"
const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const aOrA = (v) => (abc.includes(v) ? abc : ABC)

const movingShift = (s, shift) =>
  s
    .replace(/./g, (v) => (/[a-z]/i.test(v) ? (uL = aOrA(v)).charAt((uL.indexOf(v) + shift++) % 26) : (shift++ % 26, v)))
    .match(RegExp(".{1," + Math.ceil(s.length / 5) + "}", "g"))
    .concat([""])
    .slice(0, 5)

const demovingShift = (arr, shift) =>
  arr
    .join("")
    .replace(/./g, (v) =>
      /[a-z]/i.test(v)
        ? (uL = aOrA(v)).charAt((uL.indexOf(v) - shift++ + 26 * Math.ceil(arr.join("").length / 26)) % 26)
        : (shift++ % 26, v)
    )

module.exports = { aOrA, movingShift, demovingShift }
