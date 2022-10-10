//+ ====================================================================================================================
//+
//+ 8 kyu - Remove the time  [ ID: 56b0ff16d4aa33e5bb00008e ] (remove-the-time)
//+ URL: https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e
//+ Category: REFERENCE  |  Tags: DATE TIME | PARSING | FUNDAMENTALS
//+
//+ ====================================================================================================================

const shortenToDate = (longDate) => longDate.replace(/(.*),.*/, "$1") // ~12% faster than longDate.split(", ")[0]

module.exports = { shortenToDate }
