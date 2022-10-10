//+ ====================================================================================================================
//+
//+ 7 kyu - Cipher  [ ID: 5a19701d80171fd71d000029 ] (cipher)
//+ URL: https://www.codewars.com/kata/5a19701d80171fd71d000029
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS | CIPHERS | CRYPTOGRAPHY | STRINGS
//+
//+ ====================================================================================================================

const decode = (str) => encode(str, "d")
const encode = (str, d) => str.replace(/./g, (c) => String.fromCharCode(c.charCodeAt() * (!d ? 6 : 1 / 6)))

module.exports = { decode, encode }
