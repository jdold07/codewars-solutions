//+ ====================================================================================================================
//+
//+ 8 kyu - Take an Arrow to the knee, Functionally  [ ID: 559f3123e66a7204f000009f ] (take-an-arrow-to-the-knee-functionally)
//+ URL: https://www.codewars.com/kata/559f3123e66a7204f000009f
//+ Category: REFERENCE  |  Tags: ARRAYS | STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const ArrowFunc = (arr) => arr.reduce((a, c) => a + String.fromCharCode(c), "")


module.exports = { ArrowFunc }
