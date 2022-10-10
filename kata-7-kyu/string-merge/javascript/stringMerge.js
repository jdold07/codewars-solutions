//+ ====================================================================================================================
//+
//+ 7 kyu - String Merge!  [ ID: 597bb84522bc93b71e00007e ] (string-merge)
//+ URL: https://www.codewars.com/kata/597bb84522bc93b71e00007e
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const stringMerge = (s1, s2, l) => `${s1} ${s2}`.replace(RegExp(l + ".* .*?(?=" + l + ")"), "")

module.exports = { stringMerge }
