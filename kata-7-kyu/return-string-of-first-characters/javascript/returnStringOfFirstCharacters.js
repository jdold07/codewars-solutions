//+ ====================================================================================================================
//+
//+ 7 kyu - Return String of First Characters  [ ID: 5639bdcef2f9b06ce800005b ] (return-string-of-first-characters)
//+ URL: https://www.codewars.com/kata/5639bdcef2f9b06ce800005b
//+ Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const makeString = (s) => s.match(/\b\w/g).join("") // ~10% faster than s.split(" ").reduce((a, c) => a + c[0], "")

module.exports = { makeString }
