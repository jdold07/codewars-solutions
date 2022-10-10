//+ ====================================================================================================================
//+
//+ 8 kyu - Polish alphabet  [ ID: 57ab2d6072292dbf7c000039 ] (polish-alphabet)
//+ URL: https://www.codewars.com/kata/57ab2d6072292dbf7c000039
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function correctPolishLetters(string) {
  const dict = { ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z" }
  return [...string].map((el) => dict[el] || el).join("")
}

module.exports = { correctPolishLetters }
