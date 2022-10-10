//+ ====================================================================================================================
//+
//+ 6 kyu - Autocomplete! Yay!  [ ID: 5389864ec72ce03383000484 ] (autocomplete-yay)
//+ URL: https://www.codewars.com/kata/5389864ec72ce03383000484
//+ Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const autocomplete = (input, dict) =>
  dict.filter((v) => RegExp("^" + input.replace(/[^a-z]/gi, ""), "i").test(v)).slice(0, 5)

module.exports = { autocomplete }
