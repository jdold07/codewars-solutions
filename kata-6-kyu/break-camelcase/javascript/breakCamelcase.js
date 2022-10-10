//+ ====================================================================================================================
//+
//+ 6 kyu - Break camelCase  [ ID: 5208f99aee097e6552000148 ] (break-camelcase)
//+ URL: https://www.codewars.com/kata/5208f99aee097e6552000148
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const solution = (string) => string.replace(/([A-Z])/g, ` $1`)

module.exports = { solution }
