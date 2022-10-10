//+ ====================================================================================================================
//+
//+ 8 kyu - Correct the mistakes of the character recognition software  [ ID: 577bd026df78c19bca0002c0 ] (correct-the-mistakes-of-the-character-recognition-software)
//+ URL: https://www.codewars.com/kata/577bd026df78c19bca0002c0
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

function correct(string) {
  string = string.replace(/0/g, "O")
  string = string.replace(/5/g, "S")
  string = string.replace(/1/g, "I")
  return string
}

module.exports = { correct }
