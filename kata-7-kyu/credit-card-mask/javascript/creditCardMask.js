//+ ====================================================================================================================
//+
//+ 7 kyu - Credit Card Mask  [ ID: 5412509bd436bd33920011bc ] (credit-card-mask)
//+ URL: https://www.codewars.com/kata/5412509bd436bd33920011bc
//+ Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
//+
//+ ====================================================================================================================

const maskify = (cc) => cc.replace(/.(?=.{4})/g, "#")

module.exports = { maskify }
