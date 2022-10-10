//+ ====================================================================================================================
//+
//+ 6 kyu - Replace With Alphabet Position  [ ID: 546f922b54af40e1e90001da ] (replace-with-alphabet-position)
//+ URL: https://www.codewars.com/kata/546f922b54af40e1e90001da
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function alphabetPosition(text) {
  const arr = []
  text = text.replace(/[\W_\d]/g, "").toLowerCase()
  for (let i = 0; i < text.length; i++) {
    arr.push(text.charCodeAt(i) - 96)
  }
  return arr.join(" ")
}

module.exports = { alphabetPosition }
