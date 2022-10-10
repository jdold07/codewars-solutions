//+ ====================================================================================================================
//+
//+ 7 kyu - Evens times last  [ ID: 5a1a9e5032b8b98477000004 ] (evens-times-last)
//+ URL: https://www.codewars.com/kata/5a1a9e5032b8b98477000004
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const evenLast = (n) => n.reduce((a, c, i) => a + (!(i % 2) ? c : 0), 0) * n.slice(-1)[0] || 0

module.exports = { evenLast }
