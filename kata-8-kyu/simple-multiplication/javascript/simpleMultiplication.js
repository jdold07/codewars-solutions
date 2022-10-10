//+ ====================================================================================================================
//+
//+ 8 kyu - Simple multiplication  [ ID: 583710ccaa6717322c000105 ] (simple-multiplication)
//+ URL: https://www.codewars.com/kata/583710ccaa6717322c000105
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9
}


module.exports = { simpleMultiplication }
