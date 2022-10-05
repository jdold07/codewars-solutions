// 8 kyu - Basic Mathematical Operations  [ ID: 57356c55867b9b7a60000bd7  (basic-mathematical-operations) ]
// URL: https://www.codewars.com/kata/57356c55867b9b7a60000bd7
// Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
function basicOp(operation, value1, value2){
    switch(operation) {
      case "+": return value1 + value2
      case "-": return value1 - value2
      case "*": return value1 * value2
      case "/": return value1 / value2
      default: return 0
    }
  }
