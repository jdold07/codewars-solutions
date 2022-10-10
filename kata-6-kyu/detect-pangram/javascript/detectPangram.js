//+ ====================================================================================================================
//+
//+ 6 kyu - Detect Pangram  [ ID: 545cedaa9943f7fe7b000048 ] (detect-pangram)
//+ URL: https://www.codewars.com/kata/545cedaa9943f7fe7b000048
//+ Category: REFERENCE  |  Tags: STRINGS | DATA STRUCTURES | FUNDAMENTALS
//+
//+ ====================================================================================================================

const isPangram = (string) => new Set(string.toLowerCase().match(/[a-z]/g)).size === 26

module.exports = { isPangram }
