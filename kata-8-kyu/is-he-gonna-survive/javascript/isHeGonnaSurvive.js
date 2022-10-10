//+ ====================================================================================================================
//+
//+ 8 kyu - Is he gonna survive?  [ ID: 59ca8246d751df55cc00014c ] (is-he-gonna-survive)
//+ URL: https://www.codewars.com/kata/59ca8246d751df55cc00014c
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const hero = (bullets, dragons) => (dragons > 0 ? bullets / dragons >= 2 : true)

module.exports = { hero }
