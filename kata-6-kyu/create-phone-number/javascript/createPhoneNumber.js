//+ ====================================================================================================================
//+
//+ 6 kyu - Create Phone Number  [ ID: 525f50e3b73515a6db000b83 ] (create-phone-number)
//+ URL: https://www.codewars.com/kata/525f50e3b73515a6db000b83
//+ Category: ALGORITHMS  |  Tags: ARRAYS | STRINGS | REGULAR EXPRESSIONS | ALGORITHMS
//+
//+ ====================================================================================================================

const createPhoneNumber = (numbers) => numbers.join("").replace(/(\d{3})(\d{3})(\d*$)/, `($1) $2-$3`)

module.exports = { createPhoneNumber }
