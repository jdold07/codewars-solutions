/* eslint-disable regexp/prefer-range */
//+ ====================================================================================================================
//+
//+ 6 kyu - Keyword Cipher  [ ID: 57241cafef90082e270012d8 ] (keyword-cipher)
//+ URL: https://www.codewars.com/kata/57241cafef90082e270012d8
//+ Category: ALGORITHMS  |  Tags: CRYPTOGRAPHY | STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

const keywordCipher = (s, k) => {
  const abc = "abcdefghijklmnopqrstuvwxyz"
  const key = [...new Set(k + abc)].reduce((a, c, i) => ({ ...a, [abc[i]]: c }), {})
  return s.toLowerCase().replace(RegExp(`[${abc}]`, "g"), (c) => key[c])
}

module.exports = { keywordCipher }
