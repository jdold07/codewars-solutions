//+ ====================================================================================================================
//+
//+ 8 kyu - Is your period late?  [ ID: 578a8a01e9fd1549e50001f1 ] (is-your-period-late)
//+ URL: https://www.codewars.com/kata/578a8a01e9fd1549e50001f1
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | DATE TIME
//+
//+ ====================================================================================================================

const periodIsLate = (last, today, cycleLength) => Math.floor((today - last) / 86400000) > cycleLength

module.exports = { periodIsLate }
