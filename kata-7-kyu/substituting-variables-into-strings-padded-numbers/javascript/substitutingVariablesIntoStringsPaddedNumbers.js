//+ ====================================================================================================================
//+
//+ 7 kyu - Substituting Variables Into Strings: Padded Numbers  [ ID: 51c89385ee245d7ddf000001 ] (substituting-variables-into-strings-padded-numbers)
//+ URL: https://www.codewars.com/kata/51c89385ee245d7ddf000001
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const solution = (value) => `Value is ${(value + "").padStart(5, "0")}`

module.exports = { solution }
