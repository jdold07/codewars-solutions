//+ ====================================================================================================================
//+
//+ 7 kyu - Cat and Mouse - Easy Version  [ ID: 57ee24e17b45eff6d6000164 ] (cat-and-mouse-easy-version)
//+ URL: https://www.codewars.com/kata/57ee24e17b45eff6d6000164
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

const catMouse = (x) => (/C\.{0,3}m/.test(x) ? "Caught!" : "Escaped!")

module.exports = { catMouse }
