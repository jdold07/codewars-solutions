// [object Object] - Binary Addition  [ ID: 551f37452ff852b7bd000139  (binary-addition) ]
// URL: https://www.codewars.com/kata/551f37452ff852b7bd000139
// Category: REFERENCE  |  Tags: BINARY | FUNDAMENTALS
// *****************************************************************************
function addBinary(a,b) {
    let sumDecimal = a + b
    let sumBinary = Number(sumDecimal).toString(2)
    return sumBinary
  }
