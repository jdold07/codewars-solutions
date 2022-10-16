//+ ====================================================================================================================
//+
//+ 8 kyu - Check same case  [ ID: 5dd462a573ee6d0014ce715b ] (check-same-case)
//+ URL: https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function sameCase(a, b) {
  return /[^a-zA-Z]/.test(a) || /[^a-zA-Z]/.test(b)
    ? -1
    : /[a-z]/.test(a) === /[a-z]/.test(b)
    ? 1
    : 0
}

module.exports = { sameCase }
