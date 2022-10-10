//+ ====================================================================================================================
//+
//+ 8 kyu - Character Frequency  [ ID: 548ef5b7f33a646ea50000b2 ] (character-frequency-2)
//+ URL: https://www.codewars.com/kata/548ef5b7f33a646ea50000b2
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

const charFreq = (str) => [...str].reduce((a, c) => ({ ...a, [c]: (a[c] || 0) + 1 }), {})

module.exports = { charFreq }
